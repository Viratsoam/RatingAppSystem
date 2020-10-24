// require, express & router
const express = require('express');
const router = express.Router();

console.log("Entery point of routes");
// routes entry point
router.use('/rider/api/',require('./api/rider_routes'));
router.use('/driver/api/',require('./api/driver_routes'));

// export the router
module.exports = router;

