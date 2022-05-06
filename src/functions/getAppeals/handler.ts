import {
  formatErrorJSONResponse,
  NoSchemaAPIGatewayProxyEvent,
} from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { scanAll } from '@libs/dao';
import { middyfy } from '@libs/lambda';

const getAppeals: NoSchemaAPIGatewayProxyEvent = async (_event) => {
  const result = await scanAll({ TableName: 'appeals' });
  if (!result) {
    throw formatErrorJSONResponse(404, 'appeals are not found.');
  }
  return formatJSONResponse(result);
};

export const main = middyfy(getAppeals);
