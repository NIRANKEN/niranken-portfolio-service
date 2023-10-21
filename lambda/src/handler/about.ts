import { get } from '../lib/dao';
import { middyfy } from '../lib/lambda';
import {
  formatErrorJSONResponse,
  NoSchemaAPIGatewayProxyEvent,
  formatJSONResponse
} from '../lib/responses';

const aboutHandler: NoSchemaAPIGatewayProxyEvent = async (_event) => {
  const result = await get({ TableName: 'about', Key: { id: 'niranken' } });
  if (!result) {
    throw formatErrorJSONResponse(404, 'about is not found.');
  }
  return formatJSONResponse(result);
};

export const handler = middyfy(aboutHandler);
