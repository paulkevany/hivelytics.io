const bourne = require('bourne');
const property = require('./property');

async function main(event) {
  const { body } = event;
  const requestBody = bourne.parse(body);

  const {
    address, description, numBedrooms, numBathrooms,
  } = requestBody;

  return property.create(address, description, numBedrooms, numBathrooms);
}
module.exports = {
  main,
};
