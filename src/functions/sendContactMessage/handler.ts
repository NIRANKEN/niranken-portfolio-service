import {
  ValidatedAPIGatewayProxyEvent,
  ValidatedEventAPIGatewayProxyEvent,
} from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { APIGatewayProxyResult } from 'aws-lambda';
import { SES } from 'aws-sdk';

type schema = {
  type: 'object';
  properties: {
    name: {
      type: 'string';
    };
    email: {
      type: 'string';
    };
    message: {
      type: 'string';
    };
  };
};

const ses = new SES({ region: 'ap-northeast-1' });

const sendContactMessage: ValidatedEventAPIGatewayProxyEvent<schema> = async (
  event
) => {
  return await formatResult(await sendEmail(event));
};

const sendEmail = async (
  event: ValidatedAPIGatewayProxyEvent<schema>
): Promise<APIGatewayProxyResult> => {
  const body = event.body;

  var result: APIGatewayProxyResult = undefined;
  const sendEmailRequest = await ses.sendEmail({
    Destination: {
      ToAddresses: ['mayatecholab.kimura@gmail.com'],
    },
    Message: {
      Body: {
        Text: {
          Data:
            'Name: ' +
            body.name +
            '\n\n' +
            'Email: ' +
            body.email +
            '\n\n' +
            body.message,
        },
      },
      Subject: {
        Data: 'Test Email Subject',
      },
    },
    Source: 'mayatecholab.portfolio@gmail.com',
  });
  sendEmailRequest.send((err, data) => {
    console.log(err);
    console.log(data);
    if (data) {
      result = {
        statusCode: 200,
        body: JSON.stringify({
          id: '1',
          name: body.name,
          email: body.email,
          message: body.message,
        }),
      };
    } else if (err) {
      result = {
        statusCode: err.statusCode,
        body: JSON.stringify({}),
      };
    } else {
      result = {
        statusCode: 502,
        body: JSON.stringify({}),
      };
    }
  });

  // TODO: 多分BestPracticeありそう
  while (!result) {
    console.log('wait 1 second...');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(result);
  }
  return result;
};

const formatResult = async (result: APIGatewayProxyResult) =>
  result.statusCode ? result : { statusCode: 502, body: JSON.stringify({}) };

export const main = middyfy(sendContactMessage);
