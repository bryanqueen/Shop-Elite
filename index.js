const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();


//Initialize App
const app = express();

//MiddleWare
app.use(express.json());

//Establish a mongoose connection
mongoose.connect(process.env.MONGO_URI)
.then(console.log('Database Connection was successful'));


const port = 4000;

app.listen(port, () => {
    console.log(`Server is running on localhost${port}`)
})