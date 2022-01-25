// Create a new connection using socket.io 
let clientSocket = io();

var latte 
let uova 
let burro 
let pane 
let mela 

let myFood

// define the function that will be called on a new newConnection
clientSocket.on("connect", newConnection);

// callback function for "connect" messages
function newConnection() {
  console.log("your id:", clientSocket.id);
}

clientSocket.on("food", setFood); //=when the "food" message is received from the server, execute setFood;
function setFood(assignedFood) {  //(data from the message)
 myFood = loadImage("./assets/" + assignedFood + ".png");
}

function preload (){
  latte = loadImage ("./assets/milk.png");
  uova = loadImage ("./assets/egg.png");
  burro = loadImage ("./assets/butter.png");
  pane = loadImage ("./assets/bread.png");
  mela = loadImage("./assets/apple.png");
  
}

// Define which function should be called when a new message
// comes from the server with type "mouseBroadcast"
clientSocket.on("mouseBroadcast", otherMouse);
// Callback function called when a new message comes from the server
// Data parameters will contain the received data
function otherMouse(dataReceived) {
  imageMode (CENTER)
  image(latte, dataReceived.x, dataReceived.y, 30, 30);
}



// create the artboard
function setup() {
  createCanvas(windowWidth, windowHeight);
  background("white");

  push()
  let title = "your grocery list"
  fill("cornflowerBlue")
  textSize (40)
  textFont ("Amita")
  textAlign (CENTER)
  text (title, width/2, height-720)
  pop()

  push()
  let list = "What's missing today? [l]:🥛 [u]:🥚 [b]:🧈 [p]:🥖 [m]:🍎"
  textSize (20)
  textAlign (CENTER)
  text (list, width/2, height-50)
  pop()

  push()
  fill("azure")
  stroke("cornflowerBlue")
  rectMode(CENTER)
  rect(width/2, height/2, width/2+30, height/2+30)
  pop()
}


// draw the circle
function draw() {}

// when the mouse is moved, draw it and send a message to the server
function mousePressed() {
  imageMode (CENTER)
  image ("milk.png", mouseX, mouseY, 30, 30)

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

// function mouseDragged() {
//   imageMode(CENTER);
//   image(myFood,mouseX,mouseY,29,29);
//   message = {
//     x: mouseX,
//     y: mouseY,
//   };
//   clientSocket.emit("mouse", message);
// }

function keyPressed() {
  console.log(key);
  if(key === "l"){
    myFood = latte;
  } if (key === "u") {
    myFood = uova;
  } if (key === "b") {
    myFood = burro;
  } if (key === "p") {
    myFood = pane;
  } if (key === "m") {
    myFood = mela;
  }
}