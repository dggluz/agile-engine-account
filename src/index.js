const { createServer } = require('./server-utils/create-server');
const { pingCtrl } = require('./controllers/ping.controller');
const { getMoneyCtrl } = require('./controllers/get-money.controller');
const { getTransactionsCtrl } = require('./controllers/get-transactions.controller');
const { creditMoneyCtrl } = require('./controllers/credit-money.controller');
const { debitMoneyCtrl } = require('./controllers/debit-money.controller');
const { Account } = require('./models/account');
const { numberLike } = require('./validators/number-like');

const server = createServer();

const account = new Account(numberLike(process.argv[2]));

server.get('/api/ping', pingCtrl);
server.get('/api/money', getMoneyCtrl(account));
server.post('/api/credit', creditMoneyCtrl(account));
server.post('/api/debit', debitMoneyCtrl(account));
server.get('/api/transactions', getTransactionsCtrl(account));
