// Create a new connection using socket.io 
let clientSocket = io();

// var latte 
// let uova 
// let burro 
// let pane 
// let mela 

// let myFood

// define the function that will be called on a new newConnection
clientSocket.on("connect", newConnection);
function newConnection() { // callback function for "connect" messages
  console.log("your id:", clientSocket.id);
}

// clientSocket.on("food", setFood); //=when the "food" message is received from the server, execute setFood;
// function setFood(assignedFood) {  //(data from the message)
//  let myFood = loadImage("./assets/" + assignedFood + ".png");
// }

//ESPERIMENTO FALLITO
function preload (){
  let milk = loadImage ("./assets/milk.png");
  let eggs = loadImage ("./assets/egg.png");
  let butter = loadImage ("./assets/butter.png");
  let bread = loadImage ("./assets/bread.png");
  let apple = loadImage("./assets/apple.png");
  
}


// Define which function should be called when a new message
// comes from the server with type "mouseBroadcast"
clientSocket.on("mouseBroadcast", otherMouse);
// Callback function called when a new message comes from the server
// Data parameters will contain the received data
function otherMouse(dataReceived) {
  imageMode (CENTER)
  image(myFood, dataReceived.x, dataReceived.y, 30, 30);
  // stroke("cornflowerBlue")
  // line (dataReceived.x, dataReceived.y, dataReceived.m, dataReceived.n)
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
  let subtitle = "what's missing today?"
  fill ("blue")
  textSize (20)
  textAlign(CENTER)
  text (subtitle, width/2, height-680)
  pop()

  // push()
  // let list = "What's missing today? \n [l]:🥛 [u]:🥚 [b]:🧈 [p]:🥖 \n[m]:🍎"
  // textSize (20)
  // textAlign (LEFT)
  // text (list, 30, height-500)
  // pop()

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
  image (myFood, mouseX, mouseY, 30, 30)
  // stroke ("blue")
  // line (mouseX, mouseY, pmouseX, pmouseY)

  // create an object containing the mouse position
  let message = {
    id: clientSocket.id,
    x: mouseX,
    y: mouseY,
    // m: pmouseX,
    // n: pmouseY,
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
