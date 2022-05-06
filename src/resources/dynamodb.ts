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
  skillsTable: {
    Type: 'AWS::DynamoDB::Table',
    Properties: {
      AttributeDefinitions: [
        {
          AttributeName: 'title',
          AttributeType: 'S',
        },
        {
          AttributeName: 'id',
          AttributeType: 'S',
        },
      ],
      KeySchema: [
        {
          AttributeName: 'title',
          KeyType: 'HASH',
        },
        {
          AttributeName: 'id',
          KeyType: 'RANGE',
        },
      ],
      BillingMode: 'PAY_PER_REQUEST',
      TableName: 'skills',
    },
  },
  appealsTable: {
    Type: 'AWS::DynamoDB::Table',
    Properties: {
      AttributeDefinitions: [
        {
          AttributeName: 'appeal',
          AttributeType: 'S',
        },
        {
          AttributeName: 'id',
          AttributeType: 'S',
        },
      ],
      KeySchema: [
        {
          AttributeName: 'appeal',
          KeyType: 'HASH',
        },
        {
          AttributeName: 'id',
          KeyType: 'RANGE',
        },
      ],
      BillingMode: 'PAY_PER_REQUEST',
      TableName: 'appeals',
    },
  },
  aboutTable: {
    Type: 'AWS::DynamoDB::Table',
    Properties: {
      AttributeDefinitions: [
        {
          AttributeName: 'id',
          AttributeType: 'S',
        },
      ],
      KeySchema: [
        {
          AttributeName: 'id',
          KeyType: 'HASH',
        },
      ],
      BillingMode: 'PAY_PER_REQUEST',
      TableName: 'about',
    },
  },
};