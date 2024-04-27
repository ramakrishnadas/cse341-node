const mongodb = require('../db/connect');

// using data from database
const getData = async (req, res, next) => {
    const result = await mongodb.getDb().db("users").collection("user").find();
    result.toArray().then((lists) => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(lists[0]);
    });
}

// Using local json file

// const fs = require("fs");

// const getData = async (req, res, next) => {

//     const filePath = './user.json';

//     // Synchronous approach
//     try {
//         const data = fs.readFileSync(filePath, 'utf8');
//         const jsonData = JSON.parse(data);
//         res.setHeader("Content-Type", "application/json");
//         res.status(200).json(jsonData[0]);
//     } catch (err) {
//         console.error('Error reading file:', err);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// }



module.exports = { getData };