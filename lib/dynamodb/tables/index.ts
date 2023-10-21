import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import { RemovalPolicy, Stack } from 'aws-cdk-lib';
import { DynamoDBSeeder, Seeds } from '@cloudcomponents/cdk-dynamodb-seeder';
import path = require('path');
import { TableName } from '../../types';

export const createTable = (stack: Stack, id: string, tableName: TableName) => {
  const table = new dynamodb.Table(stack, id, {
    tableName,
    partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING },
    removalPolicy: RemovalPolicy.DESTROY,
  });

  // insert seed data
  new DynamoDBSeeder(stack, `JsonFileSeeder-${tableName}`, {
    table,
    seeds: Seeds.fromJsonFile(
      path.join(__dirname, `/../__seeds__/${tableName}.json`)
    ),
  });

  return table;
};
