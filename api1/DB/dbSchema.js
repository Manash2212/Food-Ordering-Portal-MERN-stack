const mongoonse = require('mongoose')
const dbSchema = new mongoonse.Schema(
    {
        
        name:{
            type:String,
            required:true
        },
        image:{
            type:String,
            required:true
        }

    }
)

module.exports = mongoonse.model('Category',dbSchema)


