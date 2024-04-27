const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const professionalRoutes = require("./routes/professional");
const mongodb = require('./db/connect');
const port = process.env.port || 8080;

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/professional', professionalRoutes);


mongodb.initDb((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Connected to DB and listening on ${port}`);
    }
});