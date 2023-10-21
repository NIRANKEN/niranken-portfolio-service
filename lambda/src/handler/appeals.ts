import { scanAll } from '../lib/dao';
import { middyfy } from '../lib/lambda';
import {
  formatErrorJSONResponse,
  NoSchemaAPIGatewayProxyEvent,
  formatJSONResponse
} from '../lib/responses';

const appealsHandler: NoSchemaAPIGatewayProxyEvent = async (_event) => {
  const result = await scanAll({ TableName: 'appeals' });
  if (!result) {
    throw formatErrorJSONResponse(404, 'appeals are not found.');
  }
  return formatJSONResponse(result);
};

export const handler = middyfy(appealsHandler);
