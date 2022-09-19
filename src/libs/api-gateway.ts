import type {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Handler,
} from 'aws-lambda';
import type { FromSchema } from 'json-schema-to-ts';

export type ValidatedAPIGatewayProxyEvent<S> = Omit<APIGatewayProxyEvent, 'body'> & {
  body: FromSchema<S>;
};

export type ValidatedAPIGatewayProxyResult<S> = Omit<APIGatewayProxyResult, 'body'> & {
  body: FromSchema<S>;
};

export type ValidatedEventAPIGatewayProxyEvent<S> = Handler<
  ValidatedAPIGatewayProxyEvent<S>,
  APIGatewayProxyResult
>;
export type NoSchemaAPIGatewayProxyEvent = Handler<
  APIGatewayProxyEvent,
  APIGatewayProxyResult
>;

const headers = {
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Origin': process.env.IS_LOCAL
    ? 'http://localhost:9000'
    : 'https://profile.niranken.tk',
  'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
  'Access-Control-Allow-Credentials': 'true',
};

export const formatJSONResponse = (
  response: Record<string, unknown> | Array<Record<string, unknown>>
) => {
  return {
    statusCode: 200,
    ...{headers},
    body: JSON.stringify(response),
  };
};

export const formatErrorJSONResponse = (
  statusCode: 404 | 502,
  message: string
) => {
  return {
    statusCode: statusCode,
    ...{headers},
    body: JSON.stringify({
      message,
    }),
  };
};
