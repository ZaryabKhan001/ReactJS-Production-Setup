import * as Sentry from '@sentry/react';

export const initSentry = () => {
  if (import.meta.env.VITE_ENV === 'production') {
    return Sentry.init({
      dsn: import.meta.env.VITE_SENTRY_DSN,
      enabled: import.meta.env.VITE_ENV === 'production',
      sendDefaultPii: true
    });
  }
};
