import { Stack, Duration } from 'aws-cdk-lib';
import * as lambda_nodejs from 'aws-cdk-lib/aws-lambda-nodejs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import path = require('path');
import { TableName } from '../types';
import { handler } from '../../lambda/src/handler/about';

export type LambdaHandler = {
  name: TableName; // Get以外を作る場合はここの型を変更する
  httpMethod: string;
  handler: lambda_nodejs.NodejsFunction;
};

export const createHandler = (stack: Stack, httpMethod: string, name: TableName, handlerName: string) => {
  return {
      name,
      httpMethod,
      handler: new lambda_nodejs.NodejsFunction(
        stack,
        handlerName,
        getNodejsFunctionProps(`${name}.ts`)
      ),
    };
};

export const createAuthorizerHandler = (stack: Stack) => {
  return new lambda_nodejs.NodejsFunction(
    stack,
    'AuthorizerHandler',
    getNodejsFunctionProps('authorizer.ts')
  );
};

const getNodejsFunctionProps = (
  fileName: string
): lambda_nodejs.NodejsFunctionProps => ({
  runtime: lambda.Runtime.NODEJS_18_X,
  entry: path.join(__dirname, '/../../lambda/src/handler/' + fileName),
  handler: 'handler',
  timeout: Duration.seconds(30),
  environment: {
    PRINCIPAL_ID: 'niranken-portfolio',
  },
});
