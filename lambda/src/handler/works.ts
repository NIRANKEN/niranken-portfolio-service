import { scanAll } from '../lib/dao';
import { middyfy } from '../lib/lambda';
import {
  formatErrorJSONResponse,
  NoSchemaAPIGatewayProxyEvent,
  formatJSONResponse
} from '../lib/responses';

const worksHandler: NoSchemaAPIGatewayProxyEvent = async (_event) => {
  const tableName = process.env.ENV_TYPE === 'development' ? 'works-development' : 'works';
  const result = await scanAll({ TableName: tableName});
  if (!result) {
    throw formatErrorJSONResponse(404, 'works are not found.');
  }
  return formatJSONResponse(result);
};

export const handler = middyfy(worksHandler);
