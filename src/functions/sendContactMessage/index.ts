import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'post',
        path: 'contact/send',
        authorizer: {
          name: 'authorizer',
          resultTtlInSeconds: 0,
        },
        cors: {
          origin:
            'https://profile.niranken.tk',
          headers: [
            'Content-Type',
            'X-Amz-Date',
            'Authorization',
            'X-Api-Key',
            'X-Amz-Security-Token',
            'X-Amz-User-Agent',
          ],
          allowCredentials: true,
        },
      },
    },
  ],
};