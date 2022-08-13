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
  iamRoleStatementsInherit: true,
  iamRoleStatements: [
    {
      Effect: 'Allow',
      Action: ['dynamodb:GetItem'],
      Resource: 'arn:aws:dynamodb:${self:provider.region}:*:table/about',
    },
  ],
};
