const mongoose = require('mongoose')

const createConnection = async () => {
    try {
        await mongoose.connect(process.env.CONNECTION_STRING)
        console.log('Database sucessfully connected')
    }
    catch(err){
        console.log('Error Occured')
    }
}

module.exports = createConnection