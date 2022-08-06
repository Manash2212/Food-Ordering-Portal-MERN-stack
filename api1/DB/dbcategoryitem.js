const mongoonse = require('mongoose')

const dbSchemaitem = new mongoonse.Schema(
    {
        categoryid:{
            type:mongoonse.Schema.ObjectId,
            required:true
        },
        name:{
            type:String,
            required:true
        },
        image:{
            type:String,
            required:true
        },
        price:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        }

    }
)

module.exports = mongoonse.model('Categoryitem',dbSchemaitem)