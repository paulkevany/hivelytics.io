const uuid = require('uuid');
const AWS = require('aws-sdk');

const tableName = 'hivelytics';

async function create({
  address, description, numBedrooms, numBathrooms,
}) {
  const item = {
    address, description, numBedrooms, numBathrooms, tenancies: {}, propertyId: uuid.v4(),
  };

  const docClient = AWS.DynamoDB.DocumentClient({ convertEmptyValues: true });

  await docClient.put({
    TableName: tableName,
    Item: item,
  }).promise();

  return item;
}


module.exports = {
  create,
};
