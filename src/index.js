const { createServer } = require('./server-utils/start-server');
const { pingCtrl } = require('./controllers/ping.controller');
const { getMoneyCtrl } = require('./controllers/get-money.controller');
const { Account } = require('./models/account');

// TODO: POST /api/debit
// TODO: POST /api/credit
// TODO: GET /api/transactions
// TODO: GET / (index.html) ??

const server = createServer();

// TODO: softcode initial money qty
const account = new Account(1000);

server.get('/ping', pingCtrl);
server.get('/money', getMoneyCtrl(account));
