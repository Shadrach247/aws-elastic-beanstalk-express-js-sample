const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello, Shadrach Ozavehe Onimisi; Congratulations, on your first DevOps deployment on AWS'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
