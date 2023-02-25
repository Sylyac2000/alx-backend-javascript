const Utils = require('./utils');

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const totalC = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${totalC}`);
};

module.exports = sendPaymentRequestToApi;
