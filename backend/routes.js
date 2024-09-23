const express = require("express");
const router = express.Router();

// Example route
router.get("/", (req, res) => {
    res.send("Hello from the backend server!");
});

// Add more routes as needed
// For example:
// router.get('/api/data', (req, res) => {
//   res.json({ message: 'This is some data from the API' });
// });

module.exports = router;
