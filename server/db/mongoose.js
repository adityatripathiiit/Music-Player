const mongoose = require('mongoose');


const MONGODB_URL = 'mongodb+srv://user:<password>@projects-7jhnx.gcp.mongodb.net/test?retryWrites=true&w=majority'

const connectionFactory = () => {
    return mongoose.connect(MONGODB_URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    }).then( () => console.log("data base successfully connected") )
    .catch(e => {
        console.log( `database_error: ${e}`);
    })
}

module.exports = connectionFactory;