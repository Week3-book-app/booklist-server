'use strict'

const express = require('express');
const cors = require('cors');
const pg = require('pg');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT;
const CLIENT_URL = process.env.CLIENT_URL;

const client = new pg.Client(process.env.DATABASE_URL);
client.connect();

app.use(cors());

app.get('/api/v1/books', (req, res) => {
  client.query(`SELECT * FROM books;`)
    .then(results => res.send(results.rows))
    .catch(console.error);
});

app.get('/api/v1/books/:id', (req, res) => {
  client.query(`SELECT * FROM books WHERE id=${req.params.id};`)
    .then(results => res.send(results.rows))
    .catch(console.error)
});


app.post('api/v1/books/add', bodyParser, (req, res) =>{
  let {title, author, isbn, image_url, description} = req.body;
  //destructuring ^

  client.query(`
    INSERT INTO books(title, author, isbn, image_url, description) VALUES($1, $2, $3, $4, $5)`,
  [title, author, isbn, image_url, description]
  )
    .then(results => res.sendStatus(201))
    .catch(console.error);
});

app.put('/api/v1/books/:id', bodyParser, (req, res) => {
  let {title, author, isbn, image_url, description} = req.body;
  client.query(`
    UPDATE books
    SET title=$1, author=$2, isbn=$3, image_url=$4, description=$5
    WHERE id=$6`,
  [title, author, isbn, image_url, description, req.params.id]
  )
    .then(() => res.sendStatus(204))
    .catch(console.error)
})

app.delete('/api/v1/books/:id', (req, res) => {
  client.query('DELETE FROM books WHERE id=$1', [req.params.id])
    .then(() => res.sendStatus(204))
    .catch(console.error);
});

app.get('*', (req,res) => res.redirect(CLIENT_URL));
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

