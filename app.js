// require express
const express = require('express');
// app
const app = express();
// mongoose
const mongoose = require('mongoose');


// connect with DB(Mongodb)
mongoose.connect('mongodb://localhost/ratingSystem',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify: false
}).then(()=>{
    console.log('Connect with MongoDb!!');
});

app.use(express.urlencoded());
app.use(express.json());

// route
app.use('/',require('./routes/index'));

//PORT
const PORT = 8000;

// listen to server
app.listen(PORT,function(err){
    if(err){
        console.log(`Error while Starting the Server:${err}`);
    }
    console.log(`Server is running on PORT:${PORT}`);
});