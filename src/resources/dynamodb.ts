import { AWS } from "@serverless/typescript";

type Resources = Required<
  Pick<AWS, 'resources'>
>['resources']['Resources'];

// TODO: 修正する
export const dynamodb: Resources = {
  worksTable: {
    Type: 'AWS::DynamoDB::Table',
    Properties: {
      AttributeDefinitions: [
        {
          AttributeName: 'type',
          AttributeType: 'S',
        },
        {
          AttributeName: 'category',
          AttributeType: 'S',
        },
      ],
      KeySchema: [
        {
          AttributeName: 'type',
          KeyType: 'HASH',
        },
        {
          AttributeName: 'category',
          KeyType: 'RANGE',
        },
      ],
      BillingMode: 'PAY_PER_REQUEST',
      TableName: 'works',
    },
  },
};