const mongoose = require('mongoose');

const dbUrl = process.env.MONGODB



const dbConnect = async () => {
    try {
        await mongoose.connect( dbUrl ,{ 
                useNewUrlParser: true 
            });
        console.log(`Db is connect`)
    } catch (error) {
        console.error(`Error ${error.message}`)
    }
}

module.exports = dbConnect