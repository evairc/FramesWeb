const BillingCycle = require('./billingCycle');

BillingCycle.methods(['get', 'post', 'put', 'delete']); /*Serviços*/

module.exports = BillingCycle;