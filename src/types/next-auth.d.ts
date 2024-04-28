import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface User {
    id: string;
    token: string;
    email: string;
    token: string;
    username: string;
    __typename: 'AuthModel';
  }

  interface Session {
    id: string;
    token: string;
    email: string;
    token: string;
    username: string;
    __typename: 'AuthModel';
  }
}

declare module 'next-auth/jwt' {
  interface User {
    id: string;
    token: string;
    email: string;
    token: string;
    username: string;
    __typename: 'AuthModel';
  }

  interface JWT {
    id: string;
    token: string;
    email: string;
    token: string;
    username: string;
    __typename: 'AuthModel';
  }
}
