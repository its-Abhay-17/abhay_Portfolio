const dbUri = process.env.MONGODB_URI;
const mongoose = require('mongoose');
const contact = require('./contact-model');
const data = require('./Services-data')
const service = require('./service-model');

main().then((res) => {
    console.log("Database Connects")
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect(dbUri);
    await service.deleteMany({});
    await service.insertMany(data);
}



module.exports = main