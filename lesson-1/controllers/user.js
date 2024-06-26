const mongodb = require("../db/connect");

const getUser = async (req, res) => {
    const result = await mongodb.getDb().db("users").collection("user").find();
    result.toArray().then((lists) => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(lists[0]);
    });
};

const getUsername = async (req, res) => {
    const result = await mongodb.getDb().db("users").collection("user").find();
    result.toArray().then((lists) => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(lists[0].username);
    });
};

module.exports = { getUser, getUsername };
