import { Stack } from 'aws-cdk-lib';
import {
  Cors,
  LambdaIntegration,
  Resource,
  TokenAuthorizer,
} from 'aws-cdk-lib/aws-apigateway';
import { LambdaHandler } from '../lambda';

export const createApi = (
  resource: Resource,
  lambdaHandler: LambdaHandler,
  auth: TokenAuthorizer,
  corsAllowOrigins: string[],
) => {
  const api = resource.addResource(lambdaHandler.name);
  api.addMethod(
    lambdaHandler.httpMethod,
    new LambdaIntegration(lambdaHandler.handler),
    {
      authorizer: auth,
    }
  );
  api.addCorsPreflight({
    allowOrigins: corsAllowOrigins,
    allowMethods: ["OPTIONS", "GET", "POST"],
    allowHeaders: Cors.DEFAULT_HEADERS,
    allowCredentials: true,
    statusCode: 200,
  });
};
