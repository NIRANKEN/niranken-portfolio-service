import {
  formatErrorJSONResponse,
  formatJSONResponse,
  ValidatedAPIGatewayProxyEvent,
  ValidatedAPIGatewayProxyResult,
  ValidatedEventAPIGatewayProxyEvent,
} from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
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

type schemaResponse = {
  type: 'object';
  properties: {
    id: {
      type: 'string';
    };
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

const adminEmail = 'test@example.com';

const sendContactMessage: ValidatedEventAPIGatewayProxyEvent<schema> = async (
  event
) => {
  return await formatResult(await sendEmail(event));
};

const sendEmail = async (
  event: ValidatedAPIGatewayProxyEvent<schema>
): Promise<ValidatedAPIGatewayProxyResult<schemaResponse>> => {
  const body = event.body;

  var result: ValidatedAPIGatewayProxyResult<schemaResponse> = undefined;
  if (
    body.name.length === 0 ||
    body.email.length === 0 ||
    body.message.length === 0
  ) {
    return {
      statusCode: 502,
      body: {},
    };
  }

  const sendEmailRequest = await ses.sendEmail({
    Destination: {
      ToAddresses: [adminEmail],
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
    Source: adminEmail,
  });
  sendEmailRequest.send((err, data) => {
    console.log(err);
    console.log(data);
    if (data) {
      result = {
        statusCode: 200,
        body: {
          id: '1',
          name: body.name,
          email: body.email,
          message: body.message,
        },
      };
    } else if (err) {
      result = {
        statusCode: err.statusCode,
        body: {
          message: err.message,
        },
      };
    } else {
      result = {
        statusCode: 502,
        body: {
          message: 'failed to send before ses.sendEmail.send() call.',
        },
      };
    }
  });

  // TODO: リファクタ
  while (!result) {
    console.log('wait 1 second...');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(result);
  }
  return result;
};

const formatResult = async (
  result: ValidatedAPIGatewayProxyResult<schemaResponse>
) =>
  result.statusCode == 200
    ? formatJSONResponse(result.body)
    : formatErrorJSONResponse(502, result.body.message);

export const main = middyfy(sendContactMessage);
