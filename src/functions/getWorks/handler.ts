import type { NoSchemaAPIGatewayProxyEvent } from "@libs/api-gateway";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { mockedWorks } from "./mockedWorks";

const getWorks: NoSchemaAPIGatewayProxyEvent = async (_event) => {
  return formatJSONResponse(mockedWorks);
};

export const main = middyfy(getWorks);
