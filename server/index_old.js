/*const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const httpProxy = require("http-proxy");


const proxy = httpProxy.createProxyServer({});

const logger = (req,res,next) => {
   console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
   next();
}
app.use(logger);


app.use(cors());
app.use(express.static('./public'));



app.all('*', function(req, res) {
   console.log('her')
   proxy.web(req, res, { target: 'http://localhost:3001'});

 });

 app.use(logger);

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
*/
//const proxy = require('express-http-proxy');
//const express = require('express')
//const app = express();
//const request = require('request');
//const port = 3008;


const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const fetch = require('node-fetch');
const port = process.env.PORT || 3008;

const app = express();
app.use(express.static(path.join(__dirname, './public')));
app.use(express.json());

const logger = (req,res,next) => {
   console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
   next();
}
app.use(logger);


//app.use('/api', proxy('http://localhost:3001'));


//app.use('/api/reviews', proxy('http://localhost:3001/api/reviews?filmname=The Shawshank Redemption', { //proxyReqPathResolver: (req) => `/api/reviews${req.url}`}));






app.listen(port, () => {
   request('http://localhost:3001', function (err, res, body) {
     if(err === null){
         console.log('reviews is reachable from proxy server')
     }
     else{
         console.log('reviews is not reachable from proxy server')
     }
   });
});
