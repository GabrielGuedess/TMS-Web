import { type User, type Session, type NextAuthOptions } from 'next-auth';

import CredentialsProvider from 'next-auth/providers/credentials';

type CredentialsProps = {
  email: string;
  password: string;
};

type ResponseProps = {
  id: string;
  name: string;
  email: string;
  token: string;
  username: string;
  role: 'USER' | 'ADMIN' | 'CLIENT';
  updated_at: Date;
  created_at: Date;
};

const signIn = async ({
  email,
  password,
}: CredentialsProps): Promise<ResponseProps> => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL!, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: `mutation {
        login(loginData: {email: "${email}", password: "${password}"}) {
          token
          email
          id
          token
          username
          __typename
        }
      }`,
    }),
  });

  const { data } = (await response.json()) as {
    data: { login: ResponseProps };
  };

  return data.login;
};

export const authOptions = {
  pages: { signIn: '/' },
  session: { strategy: 'jwt' },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async redirect({ url }) {
      return url;
    },
    async session({ token, session }) {
      return { ...session, ...token };
    },
    async jwt({ user, token, trigger, session }): Promise<any> {
      if (trigger === 'update') {
        const newData = session as Session;

        token.user = { ...token, ...newData } as User;
      }

      return { ...token, ...user };
    },
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { type: 'text', label: 'E-mail' },
        password: { type: 'password', label: 'Password' },
      },
      async authorize(credentials): Promise<any> {
        if (credentials) {
          const data = await signIn({
            email: credentials.email,
            password: credentials.password,
          });

          return data;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthOptions;
