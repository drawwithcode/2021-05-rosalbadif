// Create a new connection using socket.io (imported in index.html)
// make sure you added the following line to index.html:
// <script src="/socket.io/socket.io.js"></script>
let clientSocket 

function preolad() {
  clientSocket = io()
  clientSocket.on("connect", newConnection);
  clientSocket.on("mouseBroadcast", otherMouse);
  clientSocket.on("welcome", welcomeFunction);
  clientSocket.on("newUser", welcomeNewUser);
}

// define the function that will be called on a new newConnection


// callback function for "connect" messages
function newConnection() {
  console.log("your id:", clientSocket.id);
}

// Define which function should be called when a new message
// comes from the server with type "mouseBroadcast"


// Callback function called when a new message comes from the server
// Data parameters will contain the received data
function otherMouse(dataReceived) {
  fill(dataReceived.color);
  circle(dataReceived.x, dataReceived.y, 20);
}

// when the mouse is moved, draw it and send a message to the server
function mouseMoved() {
  fill("red");
  circle(mouseX, mouseY, 10);

  // create an object containing the mouse position
  let message = {
    id: clientSocket.id,
    x: mouseX,
    y: mouseY,
  };

  // send the object to server,
  // tag it as "mouse" event
  clientSocket.emit("mouse", message);
}

// create the artboard
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
}

// draw the circle
function draw() {}

function welcomeFunction(data) {
  myColor = data;
  fill(myColor);
  textAlign(CENTER);
  text("Welcome " + clientSocket.id, width / 2, height / 2);
}

function welcomeNewUser(data) {
  fill(data.color);
  text("New user: " + data.id, width / 2, height / 2);
}

