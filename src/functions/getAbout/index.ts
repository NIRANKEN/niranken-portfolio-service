import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'about',
        authorizer: {
          name: 'authorizer',
          resultTtlInSeconds: 0,
        },
      },
    },
  ],
};
