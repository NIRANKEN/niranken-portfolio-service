import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import { RemovalPolicy, Stack } from 'aws-cdk-lib';
import { DynamoDBSeeder, Seeds } from '@cloudcomponents/cdk-dynamodb-seeder';
import path = require('path');
import { EnvType, TableName } from '../../types';
import { Construct } from 'constructs';

export const createTable = (stack: Stack, id: string, tableName: TableName, envType: EnvType) => {
  const table = new dynamodb.Table(stack, `${id}-${envType}`, {
    tableName: envType === "production" ? tableName : `${tableName}-${envType}`,
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
