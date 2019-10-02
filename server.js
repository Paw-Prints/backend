require("dotenv").config();
const express = require("express");
const server = express();
const cors = require("cors");

// If any required env variables are missing, exits
if (
  !process.env.PETFINDER_API_KEY ||
  !process.env.PETFINDER_SECRET ||
  !process.env.PORT
) {
  console.log(
    "Error: ensure PETFINDER_API_KEY, PETFINDER_SECRET and PORT are defined in environment variables."
  );
  process.exit(1);
}

// Sets env variables
const PORT = process.env.PORT;
const PETFINDER_API_KEY = process.env.PETFINDER_API_KEY;
const PETFINDER_SECRET = process.env.PETFINDER_SECRET;

server.use(express.json());
server.use(cors());

//routes
const routeApi = require("./routes/petFinder");

// SERVER
server.use("/api", routeApi);

server.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
