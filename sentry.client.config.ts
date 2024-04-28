import * as Sentry from '@sentry/nextjs';

Sentry.init({
  debug: false,
  replaysOnErrorSampleRate: 1,
  dsn: process.env.SENTRY_DSN,
  replaysSessionSampleRate: 0.1,
});
