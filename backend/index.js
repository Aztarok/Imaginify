const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000; // You can choose any port that's not in use

// Middleware to parse JSON requests
app.use(express.json());

// Middleware to handle CORS (allow requests from your frontend)
app.use(cors());

// Example route
app.get("/", (req, res) => {
    res.send("Hello from the backend server!");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
