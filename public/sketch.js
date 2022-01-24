// Create a new connection using socket.io (imported in index.html)
// make sure you added the following line to index.html:
// <script src="/socket.io/socket.io.js"></script>
let clientSocket = io();

// define the function that will be called on a new newConnection
clientSocket.on("connect", newConnection);

// callback function for "connect" messages
function newConnection() {
  console.log("your id:", clientSocket.id);
}

// Define which function should be called when a new message
// comes from the server with type "mouseBroadcast"
clientSocket.on("mouseBroadcast", otherMouse);

// Callback function called when a new message comes from the server
// Data parameters will contain the received data
function otherMouse(dataReceived) {
  stroke("darkOrange")
  //fill("yellow");
  line(dataReceived.x, dataReceived.y, dataReceived.m, dataReceived.n );
}

// when the mouse is moved, draw it and send a message to the server
function mouseMoved() {
  stroke("darkSlatePurple")
  //fill("red");
  line(mouseX, mouseY, pmouseX, pmouseY);

  // create an object containing the mouse position
  let message = {
    id: clientSocket.id,
    x: mouseX,
    y: mouseY,
    m: pmouseX,
    n: pmouseY,
  };

  // send the object to server,
  // tag it as "mouse" event
  clientSocket.emit("mouse", message);
}

// create the artboard
function setup() {
  createCanvas(windowWidth, windowHeight);
  background("white");
}

// draw the circle
function draw() {}