const http = require("http");  // Import http module 
const PORT = 3000; // We can any free port
const app = require('./app');  // Import app.js module


const server = http.createServer(app); // Create http server

// Now listen server on port
server.listen(PORT, ()=>{

  console.log("Server is running on http://localhost:"+PORT);

});