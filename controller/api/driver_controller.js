// require models
const Rider = require("../../models/rider");
const Rating = require("../../models/rating");
const Driver = require("../../models/driver");


// create the Rider
module.exports.createDriver = async (req,res)=>{
    console.log(req.body);
    try {
        let driver =  await Driver.create({
            name:req.body.name,
            mobile:req.body.mobile
        });
        return res.status(200).json({
            Message:"New Driver has been added",
            data:{
                driver:driver
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
        let rider = await Rider.findById(req.params.id);
        rider.rating.push(rate);
        rider.save();
        return res.status(200).json({
            Message:"Rating has been added to rider",
            rating:rate,
            data:{
                rider:rider
            }
        });
    } catch (error) {
        console.log(`Error while adding the rating:${error}`);
        return res.status(500).json({
            Error:"Internal Server Error!!"
        });
    }
}

// display Driver Details
module.exports.displayDriver = async (req,res)=>{
    try {
        let driver = await Driver.findById(req.params.id);
        console.log(driver);
        let arrRating = driver.rating;
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
            Message:"Driver Details",
            Avg_rating:overAllRating,
            data:{
                driver:driver
            }
        });
    } catch (error) {
        console.log(`Error:${error}`);
        return res.status(500).json({
            Error:"Internal Server Error!!"
        });
    }
}