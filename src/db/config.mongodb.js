const mongoose = require('mongoose');

const mongoConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Mongo DB connected');
    } catch (error) {
        console.log(`error founded at try connect mongo db:\n${error}`);
    }
}

module.exports = mongoConnect;