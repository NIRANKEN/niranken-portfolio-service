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
  auth: TokenAuthorizer
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
    allowOrigins: ['https://portfolio.mayatecholab.com', 'http://localhost:9000'],
    allowMethods: Cors.ALL_METHODS,
    allowHeaders: Cors.DEFAULT_HEADERS,
    allowCredentials: true,
    statusCode: 200,
    disableCache: true,
  });
};
