import { Stack, Duration } from 'aws-cdk-lib';
import * as lambda_nodejs from 'aws-cdk-lib/aws-lambda-nodejs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import path = require('path');
import { EnvType, TableName } from '../types';
import { handler } from '../../lambda/src/handler/about';
import { Construct } from 'constructs';

export type LambdaHandler = {
  name: TableName; // Get以外を作る場合はここの型を変更する
  httpMethod: string;
  handler: lambda_nodejs.NodejsFunction;
};

export const createHandler = (stack: Stack, httpMethod: string, name: TableName, handlerName: string, envType: EnvType) => {
  return {
      name,
      httpMethod,
      handler: new lambda_nodejs.NodejsFunction(
        stack,
        `${handlerName}-${envType}`,
        getNodejsFunctionProps(`${name}.ts`, envType)
      ),
    };
};

export const createAuthorizerHandler = (stack: Stack, envType: EnvType) => {
  return new lambda_nodejs.NodejsFunction(
    stack,
    `AuthorizerHandler-${envType}`,
    getNodejsFunctionProps('authorizer.ts', envType)
  );
};

const getNodejsFunctionProps = (
  fileName: string,
  envType: EnvType,
): lambda_nodejs.NodejsFunctionProps => ({
  runtime: lambda.Runtime.NODEJS_18_X,
  entry: path.join(__dirname, '/../../lambda/src/handler/' + fileName),
  handler: 'handler',
  timeout: Duration.seconds(30),
  environment: {
    PRINCIPAL_ID: 'niranken-portfolio',
    ENV_TYPE: envType,
  },
});
