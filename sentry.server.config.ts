import * as Sentry from '@sentry/nextjs';

Sentry.init({
  debug: false,
  tracesSampleRate: 1,
  dsn: process.env.SENTRY_DSN,
});
