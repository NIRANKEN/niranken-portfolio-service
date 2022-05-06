import {
  formatErrorJSONResponse,
  NoSchemaAPIGatewayProxyEvent,
} from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { scanAll } from '@libs/dao';
import { middyfy } from '@libs/lambda';

const getWorks: NoSchemaAPIGatewayProxyEvent = async (_event) => {
  const result = await scanAll({ TableName: 'works' });
  if (!result) {
    throw formatErrorJSONResponse(404, 'works are not found.');
  }
  return formatJSONResponse(result);
};

export const main = middyfy(getWorks);
