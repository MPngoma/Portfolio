const express = require('express');
const serverless = require('serverless-http');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => res.render('index'));
app.get('/about', (req, res) => res.render('about'));
app.get('/experience', (req, res) => res.render('experience'));
app.get('/contact', (req, res) => res.render('contact'));

// app.listen(3000, () => console.log('Server started on http://localhost:3000'));

module.exports = serverless(app);