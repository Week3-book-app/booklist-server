'use strict'

const express = require('express');
const cors = require('cors');
const pg = require('pg');

const app = express();
const PORT = process.env.PORT;
const CLIENT_URL = process.env.CLIENT_URL;

const client = new pg.client(process.env.DATABASE_URL);
client.connect();

app.use(cors());

app.get('/', (req, res) => res.send('Testing: 1, 2, 3. A, B, C. Doh, Rai, Me.'));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));