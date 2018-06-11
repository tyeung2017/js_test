const express = require('express');

const app = express();
const PORT = 9001; // should use env in Production
const callAPI = require('./controllers/callAPI.controller');
const notFound = require('./controllers/404.controller');


// should use express.Router() to manage routes in production
// but seems to be an overkill here
app.get('/api/:address/balance', callAPI);
app.all('*', notFound);

app.listen(PORT, () => console.log(`Magic happens at ${PORT}`));

