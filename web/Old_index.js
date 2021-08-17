const express = require('express')
const { Pool, Client } = require("pg");
const app = express()
const port = 3000
const test = process.env.API_URL
app.get('/', (req, res) => res.send(`Hello World!${test}`))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))