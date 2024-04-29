const express = require("express");
const app = express();
const route = require("./routes/index");
const mongodb = require("./db/connect");
const port = process.env.port || 3000;

mongodb.initDb((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Connected to DB and listening on ${port}`);
    }
});

app.use("/", route);
