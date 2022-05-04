
const express = require('express');
const routes = require('./routes/routes');
const app = express();
const fs = require('fs');
var bodyParser = require('body-parser');
let val = [{
    "name":"Duke",
    "age":"23"
}]

const port = process.env.PORT || 3001;
app.use(bodyParser.json());

app.use('/api',routes);
app.listen(port,console.log(`The server is listening to the port ${port}`));
//let result = JSON.stringify(val);
// fs.writeFileSync('./src/docs/employees.json',result,err=>{
//     if(err) throw err;
//     console.log('Value added')
// })

