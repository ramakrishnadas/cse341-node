const routes = require('express').Router();

routes.use('/', (req, res) => {
    res.send("Hello World");
  }
);

module.exports = routes;
