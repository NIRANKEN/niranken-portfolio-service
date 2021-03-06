import type { AWS } from '@serverless/typescript';

import * as functions from '@functions/index';
import { Resources } from '@resources/index';
import seed, { seedList } from 'src/seed/index';

const serverlessConfiguration: AWS = {
  service: 'niranken-portfolio-service',
  frameworkVersion: '3',
  plugins: [
    'serverless-esbuild',
    'serverless-dynamodb-local',
    'serverless-dynamodb-seed',
    'serverless-iam-roles-per-function',
    'serverless-offline',
  ],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    stage: 'dev',
    region: 'ap-northeast-1',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
    },
  },
  // import the function via paths
  functions,
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node14',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
    dynamodb: {
      stages: ['dev'],
      start: {
        port: 8000,
        noStart: true,
        inMemory: true,
        migrate: true,
        seed: true,
      },
      seed: {
        test: {
          sources: seedList,
        },
      },
    },
    seed,
  },
  resources: {
    Resources,
  },
};

module.exports = serverlessConfiguration;
