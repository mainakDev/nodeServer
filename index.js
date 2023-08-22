const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');

const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api/users', (req, res, next) => {
    res.json({message: "list of all users"});
});

//error handler
app.use((req, res, next) => {
    res.status(404).json({message: 'Some error occured'});
})
app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});

