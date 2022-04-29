import type { NoSchemaAPIGatewayProxyEvent } from "@libs/api-gateway";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { mockedAppeal } from "./mockedAppeal";

const getAppeals: NoSchemaAPIGatewayProxyEvent = async (_event) => {
  return formatJSONResponse(mockedAppeal);
};

export const main = middyfy(getAppeals);
