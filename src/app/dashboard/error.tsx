'use client';

import Link from 'next/link';

import { useEffect } from 'react';

import Lottie from 'lottie-react';
import * as Sentry from '@sentry/nextjs';

import { Button } from 'components/atoms/Button';

import notFound from 'assets/lottie/not-found.json';

const Error = ({ error }: { error: Error & { digest?: string } }) => {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-7">
      <Lottie className="w-80" animationData={notFound} loop autoPlay />

      <div className="text-center">
        <h2 className="mb-3 text-2xl font-bold text-shark-950 dark:text-white-lilac-50">
          Sorry, the page can’t be found
        </h2>

        <p className="mb-7 font-medium text-comet-500 transition-all dark:text-dark-300">
          A página que você procurava parece ter sido movida, excluída ou não
          existe.
        </p>

        <Link href="/dashboard">
          <Button color="primary" variant="solid">
            Voltar para Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
