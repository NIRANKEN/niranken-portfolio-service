import type { NoSchemaAPIGatewayProxyEvent } from "@libs/api-gateway";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { mockedAbout } from "./mockedAbout";

const getAbout: NoSchemaAPIGatewayProxyEvent = async (_event) => {
  return formatJSONResponse(mockedAbout);
};

export const main = middyfy(getAbout);
