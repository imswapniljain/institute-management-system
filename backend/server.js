//server.js
//entry point for the backend server
//loads environment variables, connects to DB,and starts the server
//required modules
//dotenv for environment variables, app for Express setup, and connectDB for MongoDB connection
require("dotenv").config();
const app = require("./src/app")
const connectDB = require("./src/config/db");

//set port from env or default to 4000
const PORT = process.env.PORT || 4000;


//async function to connect to DB and start the server
const startServer = async () => {
  try {

    await connectDB(); //connect to MongoDB first to ensure we have a DB connection before accepting requests

    //start the Express server
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
//catch any errors during DB connection or server startup
  } catch (error) {
    //log the error
    console.error("DB connection failed:", error.message);
    //exit the process with failure code
    process.exit(1);
  }
};

//call the async function to start the server
startServer();