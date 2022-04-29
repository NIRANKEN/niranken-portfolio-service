import {
  APIGatewayAuthorizerResult,
  APIGatewayTokenAuthorizerHandler,
} from 'aws-lambda';
import { middyfy } from '@libs/lambda';

const principalId: string = 'niranken-portfolio';

const authorizer: APIGatewayTokenAuthorizerHandler = async ({
  authorizationToken,
  methodArn,
}) =>
  authorizationToken === 'Bearer Allow niranken-portfolio'
    ? generatePolicy(principalId, 'Allow', methodArn)
    : generatePolicy(principalId, 'Deny', methodArn);

// Help function to generate an IAM policy
const generatePolicy = (
  principalId: string,
  effect: 'Allow' | 'Deny',
  resource: string
): APIGatewayAuthorizerResult => ({
  principalId,
  policyDocument: resource
    ? {
        Version: '2012-10-17',
        Statement: [
          {
            Action: 'execute-api:Invoke',
            Effect: effect,
            Resource: resource,
          },
        ],
      }
    : undefined,
});

export const main = middyfy(authorizer);
