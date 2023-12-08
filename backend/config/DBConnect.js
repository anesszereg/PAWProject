const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connection = await mongoose.connect('mongodb://localhost:27017/IsilDB');
        console.log(
            'Connected to MongoDB   >',
            connection.connection.host
        )
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
};

module.exports = connectDB;