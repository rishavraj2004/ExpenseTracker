const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Server is running on http://127.0.0.1:3000/")
});

module.exports = app;