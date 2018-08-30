const { createServer } = require('./server-utils/start-server');
const { pingCtrl } = require('./controllers/ping.controller');

// TODO: POST /api/debit
// TODO: POST /api/credit
// TODO: GET /transactions
// TODO: GET / (index.html) ??

const server = createServer();

server.get('/ping', pingCtrl);
