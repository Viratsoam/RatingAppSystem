// mongoose
const mongoose = require('mongoose');

// driver schema 
const driverSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        unique: true,
        required:true
    },
    rating:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Rating'
    }]
},{
    timestamps:true
});

// model
const Driver = mongoose.model('Driver',driverSchema);

// export the model
module.exports = Driver;