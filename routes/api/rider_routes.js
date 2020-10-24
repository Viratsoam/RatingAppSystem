// express & Router
const express = require('express');
const router = express.Router();
// conroller
const RiderController = require('../../controller/api/rider_controller');

// console.log("question testing");
router.post('/create',RiderController.createRider);
router.post('/:id/rating/driver',RiderController.createRating);
router.get('/:id/rider/dtails', RiderController.displayRider);


module.exports = router;