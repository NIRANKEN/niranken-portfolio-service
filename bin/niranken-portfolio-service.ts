#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { NirankenPortfolioServiceStack } from '../lib/niranken-portfolio-service-stack';
import { EnvType } from '../lib/types';


const getCorsAllowOrigins = (envType: EnvType): string[] => {
  switch (envType) {
    case "production":
      return ["https://portfolio.mayatecholab.com"];
    case "development":
      return [
        "http://localhost:9000",
      ];
  }
};

const app = new cdk.App();
const envType = app.node.tryGetContext('envType') as EnvType;
if (!envType) {
  throw new Error("envType is not defined.");
}

new NirankenPortfolioServiceStack(app, `NirankenPortfolioServiceStack-${envType}`, {
  envType,
  corsAllowOrigins: getCorsAllowOrigins(envType),
});

