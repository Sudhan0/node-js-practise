
const express = require('express');
const routes = require('./routes/routes');
const app = express();
var bodyParser = require('body-parser');
const port = process.env.PORT || 3001;
app.use(bodyParser.json());

app.use('/api',routes);
app.listen(port,console.log(`The server is listening to the port ${port}`));

