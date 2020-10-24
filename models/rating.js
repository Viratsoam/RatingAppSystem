// mongoose
const mongoose = require('mongoose');

// schema
const ratingSchema = new mongoose.Schema({    
    rate:{
        type:Number
    }
},{
    timestamps:true
});

// ratigSchema model
const Rating = mongoose.model('Rating',ratingSchema);

// exporting the model
module.exports = Rating;