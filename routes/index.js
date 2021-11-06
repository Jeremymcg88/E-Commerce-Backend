// This hooks up the server, collects all the API routes and packages 
// them up. This keeps the endpoints nice and organized while 
// allowing the API to be scalable. 

const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Testing R1</h1>")
});

module.exports = router;