import type { NoSchemaAPIGatewayProxyEvent } from "@libs/api-gateway";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { mockedSkills } from "./mockedSkills";

const getSkills: NoSchemaAPIGatewayProxyEvent = async (_event) => {
  return formatJSONResponse(mockedSkills);
};

export const main = middyfy(getSkills);
