import {
  formatErrorJSONResponse,
  NoSchemaAPIGatewayProxyEvent,
} from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { scanAll } from '@libs/dao';
import { middyfy } from '@libs/lambda';

const getSkills: NoSchemaAPIGatewayProxyEvent = async (_event) => {
  const result = await scanAll({ TableName: 'skills' });
  if (!result) {
    throw formatErrorJSONResponse(404, 'skills are not found.');
  }
  return formatJSONResponse(result);
};

export const main = middyfy(getSkills);
