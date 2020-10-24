// mongoose
const mongoose = require('mongoose');

// rider schema 
const riderSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        unique: true,
        required:true
    },
    email:{
        type:String,
        unique:true
    },
    rating:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Rating'
    }]
},{
    timestamps:true
});

// model
const Rider = mongoose.model('Rider',riderSchema);

// export the model
module.exports = Rider;