import { scanAll } from '../lib/dao';
import { middyfy } from '../lib/lambda';
import {
  formatErrorJSONResponse,
  NoSchemaAPIGatewayProxyEvent,
  formatJSONResponse
} from '../lib/responses';

const appealsHandler: NoSchemaAPIGatewayProxyEvent = async (_event) => {
  const tableName = process.env.ENV_TYPE === 'development' ? 'appeals-development' : 'appeals';
  const result = await scanAll({ TableName: tableName });
  if (!result) {
    throw formatErrorJSONResponse(404, 'appeals are not found.');
  }
  return formatJSONResponse(result);
};

export const handler = middyfy(appealsHandler);
