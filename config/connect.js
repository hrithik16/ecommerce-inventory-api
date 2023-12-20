const mongoose = require('mongoose')
const mongoPassword = process.env.MONGO_PASSWORD;
const url = 'mongodb+srv://friday:'+mongoPassword+'@cluster0.azdxdwv.mongodb.net/inventory'

mongoose.connect(url).then(() => console.log('Connected!'));

const db = mongoose.connection