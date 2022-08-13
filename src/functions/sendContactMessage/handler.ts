import {
  formatErrorJSONResponse,
  ValidatedEventAPIGatewayProxyEvent,
} from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { ContactData } from './ContactData';
import { mockedSendContactMessageResult } from './mockedSendContactMessageResult';

const sendContactMessage: ValidatedEventAPIGatewayProxyEvent<ContactData> = async (body) => {
  console.log(body);
  const result = mockedSendContactMessageResult;
  if (!result) {
    throw formatErrorJSONResponse(404, 'works are not found.');
  }
  return formatJSONResponse(result);
};

export const main = middyfy(sendContactMessage);
