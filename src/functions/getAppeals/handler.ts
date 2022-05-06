import type { NoSchemaAPIGatewayProxyEvent } from "@libs/api-gateway";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { mockedAppeals } from "./mockedAppeals";

const getAppeals: NoSchemaAPIGatewayProxyEvent = async (_event) => {
  return formatJSONResponse(mockedAppeals);
};

export const main = middyfy(getAppeals);
