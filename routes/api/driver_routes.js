// express & Router
const express = require('express');
const router = express.Router();
// conroller
const DriverController = require('../../controller/api/driver_controller');

// console.log("question testing");
router.post('/create',DriverController.createDriver);
router.post('/:id/rating/rider',DriverController.createRating);
router.get('/:id/driver/dtails', DriverController.displayDriver);

module.exports = router;