'use strict'

const express = require('express');
const cors = require('cors');
const pg = require('pg');

const app = express();
const PORT = process.env.PORT;
const CLIENT_URL = process.env.CLIENT_URL;

const client = new pg.Client(process.env.DATABASE_URL);
client.connect();

app.use(cors());

app.get('/', (req, res) => res.send('Testing: 1, 2, 3. A, B, C. Doh, Rai, Me.'));

app.get('/api/v1/books', (req, res) => {
  client.query(`SELECT * from books;`)
    .then(results => res.send(results.rows))
    .catch(console.error);

app.get('*', (req,res) => res.redirect(CLIENT_URL));
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

app.post('/books/add', bodyParser, (req, res) =>{
  let {title, author, isbn, image_url, description} = req.body;
  //destructuring ^

client.query(`
  INSERT INTO books(title, author, isbn, image_url, description) VALUES($1, $2, $3, $4, $5);`, [title, author, isbn, image_url, description])
    .then(() => res.sendStatus(201))
    .catch(errorCallback);

});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));