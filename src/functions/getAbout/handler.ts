import {
  formatErrorJSONResponse,
  NoSchemaAPIGatewayProxyEvent,
} from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { get } from '@libs/dao';
import { middyfy } from '@libs/lambda';

const getAbout: NoSchemaAPIGatewayProxyEvent = async (_event) => {
  const result = await get({ TableName: 'about', Key: { id: 'niranken' } });
  if (!result) {
    throw formatErrorJSONResponse(404, 'about is not found.');
  }
  return formatJSONResponse(result);
};

export const main = middyfy(getAbout);
