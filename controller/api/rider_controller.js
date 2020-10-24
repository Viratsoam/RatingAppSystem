// require models
const Rider = require("../../models/rider");
const Rating = require("../../models/rating");
const Driver = require("../../models/driver");

// create the Rider
module.exports.createRider = async (req,res)=>{
    console.log(req.body);
    try {
        let rider =  await Rider.create({
            name:req.body.name,
            mobile:req.body.mobile,
            email:req.body.email
        });
        return res.status(200).json({
            Message:"New Rider has been added",
            data:{
                rider:rider
            }
        });

    } catch(error) {
        console.log(`Error:${error}`);
        return res.status(500).json({
            Error:"Internal Server Error"
        });
    }
}

// rating to driver
module.exports.createRating = async (req,res)=>{
    console.log(req.body);
    try {
        let rate =await Rating.create({
            rate:req.body.rate
        });
        let driver = await Driver.findById(req.params.id);
        driver.rating.push(rate);
        driver.save();
        return res.status(200).json({
            Message:"Rating has been added to driver",
            rating:rate,
            data:{
                driver:driver
            }
        });
    } catch (error) {
        console.log(`Error while adding the rating:${error}`);
        return res.status(500).json({
            Error:"Internal Server Error!!"
        });
    }
}

// Display Rider Details
module.exports.displayRider = async (req,res)=>{
    try {
        let rider = await Rider.findById(req.params.id);
        let arrRating = rider.rating;
        let count = 1;
        let overAllRating = 0;
    // iterating over the ratings array
        for(let i=0;i<arrRating.length;i++){
            let rated = await Rating.findById(arrRating[i]);
            let givenRate = rated.rate;
            overAllRating = overAllRating + count*givenRate;
        }
        overAllRating = overAllRating/5;
        return res.status(200).json({
            Message:"Rider Details",
            Avg_rating:overAllRating,
            data:{
                Rider:rider
            }
        });
    } catch (error) {
        console.log(`Error:${error}`);
        return res.status(500).json({
            Error:"Internal Server Error!!"
        });
    }
}