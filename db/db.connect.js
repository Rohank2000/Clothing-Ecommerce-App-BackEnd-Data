const mongoose = require('mongoose');

require('dotenv').config();

const accessMongoLogIn = process.env.mongoDB_URI;

const databaseConnection = async ()=>{
await mongoose.connect(accessMongoLogIn).then(()=>console.log("Connected to Database.")).catch((error)=>console.log("Error Connecting to the Database", error));
};

module.exports = {databaseConnection}