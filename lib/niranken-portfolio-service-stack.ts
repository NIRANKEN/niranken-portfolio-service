import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import { createTable } from "./dynamodb/tables";
import { createAuthorizerHandler, createHandler } from "./lambda";
import { createApi } from "./apigateway";

export class NirankenPortfolioServiceStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // 1. DynamoDB
    // create dynamodb tables
    const aboutTable = createTable(this, 'aboutTable', 'about');
    const worksTable = createTable(this, 'worksTable', 'works');
    const appealsTable = createTable(this, 'appealsTable', 'appeals');
    const skillsTable = createTable(this, 'skillsTable', 'skills');

    // 2. Lambda
    // create lambda Functions
    const aboutHandler = createHandler(this, 'GET', 'about', 'AboutHandler');
    const worksHandler = createHandler(this, 'GET', 'works', 'WorksHandler');
    const appealsHandler = createHandler(this, 'GET', 'appeals', 'AppealsHandler');
    const skillsHandler = createHandler(this, 'GET', 'skills', 'SkillsHandler');
    const handlers = [aboutHandler, worksHandler, appealsHandler, skillsHandler];

    // grant read/write permission to lambda functions
    aboutTable.grantReadData(aboutHandler.handler);
    worksTable.grantReadData(worksHandler.handler);
    appealsTable.grantReadData(appealsHandler.handler);
    skillsTable.grantReadData(skillsHandler.handler);

    // create Authorizer
    const authorizer = createAuthorizerHandler(this);

    // 3. ApiGateway
    const restApi = new apigateway.RestApi(this, "Endpoint");
    const v1 = restApi.root.addResource("v1");

    const auth = new apigateway.TokenAuthorizer(this, "NewTokenAuthorizer", {
      handler: authorizer,
      identitySource: "method.request.header.Authorization",
    });

    // add lambda handlers to api
    handlers.forEach((handler) => {
      createApi(v1, handler, auth);
    });
  }
}
