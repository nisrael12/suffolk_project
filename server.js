
// Like the Proc file, this file also has to be created in the root folder.

// Here you are declaring express.  You are saying "Hey I require express."
const express = require("express");

// Here we are requiring serve-static, which is a library for serving static files.
const serveStatic = require("serve-static");

const path = require("path");

// Create the express app.
const app = express();

// Create a middleware to handle the serving of the app.
// We are using this root directory, "/", to serve all of our files in the public folder, "/public".
app.use("/", serveStatic(path.join(__dirname, "/public")));

// Serve index by default.
// We have this route that is basically there by default.  The root directory by default is going to the index.html, which is the file we have inside the public folder.
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

// Create default port to serve the app on.
// Joe has it at 5000, but he said you can change it to 3000, if you'd like.  He normally has it at 5000 in case he is running the "npm run watch" script.
const port = process.env.PORT || 5000;

app.listen(port);

// Log to feedback that this is actually running.
console.log("Server started on port " + port);