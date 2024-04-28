import { getServerSession } from 'next-auth';

import { apollo } from 'apollo/client';

import { QUERY_AVATAR } from 'graphql/queries/user/avatar';
import { type AvatarQuery, type AvatarQueryVariables } from 'graphql/generated';

import { twMerge } from 'tailwind-merge';

import { Avatar } from 'components/atoms/Avatar';
import { ProfileIcon } from 'components/atoms/ProfileIcon';

import { authOptions } from 'lib/auth';

import { type CurrentAvatarProps } from './types';

export const CurrentAvatar = async ({
  className,
  ...props
}: CurrentAvatarProps) => {
  const session = await getServerSession(authOptions);

  const { data } = await apollo().query<AvatarQuery, AvatarQueryVariables>({
    query: QUERY_AVATAR,
    variables: { userId: session?.id },
  });

  return (
    <div className={twMerge('flex', className)} {...props}>
      {data?.user?.avatar_url ? (
        <Avatar alt="Current Avatar" src={data?.user?.avatar_url} />
      ) : (
        <div className="flex size-10 items-center justify-center">
          <ProfileIcon className="text-rock-blue-500" />
        </div>
      )}
    </div>
  );
};
