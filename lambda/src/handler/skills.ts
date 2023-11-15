import { scanAll } from '../lib/dao';
import { middyfy } from '../lib/lambda';
import {
  formatErrorJSONResponse,
  NoSchemaAPIGatewayProxyEvent,
  formatJSONResponse
} from '../lib/responses';

const skillsHandler: NoSchemaAPIGatewayProxyEvent = async (_event) => {
  const tableName = process.env.ENV_TYPE === 'development' ? 'skills-development' : 'skills';
  const result = await scanAll({ TableName: tableName });
  if (!result) {
    throw formatErrorJSONResponse(404, 'skills are not found.');
  }
  return formatJSONResponse(result);
};

export const handler = middyfy(skillsHandler);
