const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
const connectionFactory = require('./db/mongoose.js');
connectionFactory();
const bodyParser = require('body-parser');
const musicRoutes = require('./routes/music');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("dev"));
app.use("/music", musicRoutes);

app.use('/uploads', express.static('uploads'));


app.get("/", (req,res) => {
    res.json(
        "Hola MEVN devs ... assemble"); 
})


app.listen(PORT, () => {
    console.log(`App is running on the port ${PORT}`);
})