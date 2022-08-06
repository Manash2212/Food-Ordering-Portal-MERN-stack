const mongoose = require('mongoose');

const connectDB = async () => {
    console.log('trying to connect')
   try {
       const conn = await mongoose.connect('mongodb://localhost:27017/FoodCart', {
           useUnifiedTopology: true,
           useNewUrlParser: true,
           // useCreateIndex: true,
       })
       console.log(`MongoDB Connected: ${conn.connection.host}`)
   } catch (error) {
       console.error(`Error: ${error.message}`)
       process.exit(1)
   }
}
 
module.exports = connectDB