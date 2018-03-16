const express = require('express');
const bodyParser = require('body-parser');
const ctrl = require('./controller');
const massive = require('massive');
const app = express();




app.use(bodyParser.json())

massive({
    host: 'ec2-23-23-222-184.compute-1.amazonaws.com',
    port: 5432,
    database: 'd3eek1jiv9mnch',
    user: 'fughcvqbkgnzfc',
    password: '0944d077f138c381c52f83b64b15d0816635f7bf3fd5691e2742916d4e5dbe01',
    ssl: true
  }).then(function(db) {
  app.set('db', db)
    });

app.get('', )
app.post('', )
app.put('', )
app.delete('', )



let port = 4000
app.listen(port, ()=> console.log(`listening on port ${port}`))