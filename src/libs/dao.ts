import * as DynamoDB from 'aws-sdk/clients/dynamodb';
import { ServiceConfigurationOptions } from 'aws-sdk/lib/service';

type DynamoDBOption = DynamoDB.DocumentClient.DocumentClientOptions &
  ServiceConfigurationOptions &
  DynamoDB.ClientApiVersions;

const onlineOption: DynamoDBOption = {
  apiVersion: '2012-08-10',
  sslEnabled: false,
  paramValidation: false,
  convertResponseTypes: false,
  maxRetries: 3,
  httpOptions: {
    connectTimeout: 1000,
    timeout: 1000,
  },
};

const offlineOption: DynamoDBOption = {
  ...onlineOption,
  endpoint: 'http://localhost:8000',
};

export const scanAll = async (param: DynamoDB.DocumentClient.ScanInput) => {
  const docClient = new DynamoDB.DocumentClient(
    process.env.IS_LOCAL ? offlineOption : onlineOption
  );
  try {
    return (await docClient.scan(param).promise()).Items;
  } catch (err) {
    console.error(
      'Unable to scan the table. Error JSON:',
      JSON.stringify(err, null, 2)
    );
  }
};

export const get = async (param: DynamoDB.DocumentClient.GetItemInput) => {
  const docClient = new DynamoDB.DocumentClient(
    process.env.IS_LOCAL ? offlineOption : onlineOption
  );
  try {
    return (await docClient.get(param).promise()).Item;
  } catch (err) {
    console.error(
      'Unable to get the table item. Error JSON:',
      JSON.stringify(err, null, 2)
    );
  }
}

export default {
  scanAll,
  get,
}
