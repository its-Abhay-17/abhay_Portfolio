const mongoose = require('mongoose');
const contact = require('./contact-model')

main().then((res) => {
    console.log("Database Connects")
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/Mern_Stack');
}

module.exports = main