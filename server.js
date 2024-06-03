
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./route/routes');
app.use(cors(
    {
        origin:"http://localhost:4200"
    }
));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
  
app.listen(9002, function check(err) {
    if (err)
        console.log("Error ");
    else
        console.log("started");
});

mongoose.connect("mongodb://localhost:27017/abc")
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.log("Error connecting to MongoDB:", error);  
});

app.use(express.json());
app.use('/api', routes);



