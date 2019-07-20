const express = require('express');
const path = require('path');
const fetch = require('node-fetch');

const app = express();


app.use(express.static(path.join(__dirname, '/../public')));
app.use(express.json());


app.get('/api/rand', (req, res) => {
  fetch('http://localhost:3002/api/rand')
  .then(fres => fres.json())
  .then(fres =>  {
    res.status(200).send(fres);
  });
});

app.get('/api/featured', (req, res) => {
  fetch(`http://localhost:3002/api/featured?id=${req.query.id}`)
  .then(fres => fres.json())
  .then(fres =>  {
    res.status(200).send(fres);
  });
});

app.get('/api/personnel', (req, res) => {
  fetch(`http://localhost:3000/api/personnel?id=${req.query.id}`)
  .then(fres => fres.json())
  .then(fres =>  {
    res.status(200).send(fres);
  });
});

app.get('/api/movies', (req, res) => {
  fetch(`http://localhost:3000/api/movies?feature=true`)
  .then(fres => fres.json())
  .then(fres =>  {
    res.status(200).send(fres);
  });
});

app.get('/api/reviews', (req, res) => {
  console.log(req.query.id)
  fetch(`http://localhost:3001/api/reviews?id=0`,{
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
  .then(fres => fres.json())
  .then(fres =>  {
    res.status(200).send(fres);
  });
})

const port = 3008;
app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});