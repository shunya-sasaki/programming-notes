import pino from 'pino';

export const logger = pino({
  transport: {
    targets: [
      {
        target: 'pino/file',
        options: {
          destination: 'log/app.log',
        },
      },
    ],
  },
});
