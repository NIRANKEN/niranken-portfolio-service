import * as cdk from "aws-cdk-lib";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import { createTable } from "./dynamodb/tables";
import { createAuthorizerHandler, createHandler } from "./lambda";
import { createApi } from "./apigateway";
import { EnvType } from "./types";

type ServiceProps = {
  envType: EnvType;
  corsAllowOrigins: string[];
};

export class NirankenPortfolioServiceStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props: ServiceProps) {
    super(scope, id);

    // 1. DynamoDB
    // create dynamodb tables
    const aboutTable = createTable(this, 'aboutTable', 'about', props.envType);
    const worksTable = createTable(this, 'worksTable', 'works', props.envType);
    const appealsTable = createTable(this, 'appealsTable', 'appeals', props.envType);
    const skillsTable = createTable(this, 'skillsTable', 'skills', props.envType);

    // 2. Lambda
    // create lambda Functions
    const aboutHandler = createHandler(this, 'GET', 'about', 'AboutHandler', props.envType);
    const worksHandler = createHandler(this, 'GET', 'works', 'WorksHandler', props.envType);
    const appealsHandler = createHandler(this, 'GET', 'appeals', 'AppealsHandler', props.envType);
    const skillsHandler = createHandler(this, 'GET', 'skills', 'SkillsHandler', props.envType);
    const handlers = [aboutHandler, worksHandler, appealsHandler, skillsHandler];

    // grant read/write permission to lambda functions
    aboutTable.grantReadData(aboutHandler.handler);
    worksTable.grantReadData(worksHandler.handler);
    appealsTable.grantReadData(appealsHandler.handler);
    skillsTable.grantReadData(skillsHandler.handler);

    // create Authorizer
    const authorizer = createAuthorizerHandler(this, props.envType);

    // 3. ApiGateway
    const restApi = new apigateway.RestApi(this, `Endpoint-${props.envType}`);
    const v1 = restApi.root.addResource("v1");

    const auth = new apigateway.TokenAuthorizer(this, `NewTokenAuthorizer-${props.envType}`, {
      handler: authorizer,
      identitySource: "method.request.header.Authorization",
    });

    // add lambda handlers to api
    handlers.forEach((handler) => {
      createApi(v1, handler, auth, props.corsAllowOrigins);
    });
  }
}
