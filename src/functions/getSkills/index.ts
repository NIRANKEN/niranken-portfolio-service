import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'skills',
        authorizer: {
          name: 'authorizer',
          resultTtlInSeconds: 0,
        },
        cors: {
          origin:
            'http://deploy-niranken-portfolio.s3-website-ap-northeast-1.amazonaws.com',
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
      Action: ['dynamodb:Scan'],
      Resource: 'arn:aws:dynamodb:${self:provider.region}:*:table/skills',
    },
  ],
};
