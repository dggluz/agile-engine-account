const { createServer } = require('./server-utils/create-server');
const { pingCtrl } = require('./controllers/ping.controller');
const { getMoneyCtrl } = require('./controllers/get-money.controller');
const { getTransactionsCtrl } = require('./controllers/get-transactions.controller');
const { creditMoneyCtrl } = require('./controllers/credit-money.controller');
const { debitMoneyCtrl } = require('./controllers/debit-money.controller');
const { Account } = require('./models/account');

// TODO: GET /api/transactions

const server = createServer();

// TODO: softcode initial money qty
const account = new Account(1000);

server.get('/api/ping', pingCtrl);
server.get('/api/money', getMoneyCtrl(account));
server.post('/api/credit', creditMoneyCtrl(account));
server.post('/api/debit', debitMoneyCtrl(account));
server.get('/api/transactions', getTransactionsCtrl(account));
