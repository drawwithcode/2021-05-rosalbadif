// Create a new connection using socket.io 
let clientSocket = io();

var latte 
var uova 
var burro 
var pane 
var mela 
var sale
var aglio
var cipolla
var carne
var pasta
var patate
var insalata
var vino
var pomodoro

var myFood 
var message

// define the function that will be called on a new newConnection
clientSocket.on("connect", newConnection);
function newConnection() { // callback function for "connect" messages
  console.log("your id:", clientSocket.id);
}

// clientSocket.on("food", setFood); //=when the "food" message is received from the server, execute setFood;
// function setFood(assignedFood) {  //(data from the message)
//  myFood = loadImage("./assets/" + assignedFood + ".png");
// }


//ESPERIMENTO FALLITO
function preload (){
  latte = loadImage ("./assets/milk.png");
  uova = loadImage ("./assets/egg.png");
  burro = loadImage ("./assets/butter.png");
  pane = loadImage ("./assets/bread.png");
  mela = loadImage("./assets/apple.png");
  sale = loadImage("./assets/salt.png");
  aglio = loadImage("./assets/garlic.png");
  cipolla = loadImage("./assets/onion.png");
  carne = loadImage("./assets/meat.png");
  pasta = loadImage("./assets/pasta.png");
  patate = loadImage("./assets/potato.png");
  insalata = loadImage("./assets/salad.png")
  vino = loadImage("./assets/wine.png");
  pomodoro = loadImage("./assets/tomato.png");


  myFood = latte
}


// Define which function should be called when a new message
// comes from the server with type "mouseBroadcast"
clientSocket.on("mouseBroadcast", otherMouse);
// Callback function called when a new message comes from the server
// Data parameters will contain the received data
function otherMouse(dataReceived) {
  // imageMode (CENTER)
  // image(myFood, dataReceived.x, dataReceived.y, 30, 30);
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

  push()
  let list = " [m]:🥛 \n [e]:🥚 \n [b]:🧈 \n [t]:🥖 \n[a]:🍎 \n[p]:🍝 \n[w]:🍷 \n[g]:🧄 \n[o]:🧅 \n[s]:🥬 \n[i]:🍅 \n[r]:🥔 \n[c]:🥩 "
  fill("blue")
  textSize (20)
  textAlign (LEFT)
  text (list, 30, height-600)
  pop()

  push()
  fill("azure")
  stroke("cornflowerBlue")
  rectMode(CENTER)
  rect(width/2, height/2, width/2+30, height/2+30)
  pop()
}



function draw() {}

// when the mouse is moved or pressed, draw it and send a message to the server
function mousePressed() {
  push()
  imageMode(CENTER)
  image(myFood, mouseX, mouseY, 29, 29)
  pop()
  // stroke ("blue")
  // line (mouseX, mouseY, pmouseX, pmouseY)

  // create an object containing the mouse position
 message = {
    //id: clientSocket.id,
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
//   image(latte,mouseX,mouseY,29,29);
//   message = {
//     x: mouseX,
//     y: mouseY,
//   };
//   clientSocket.emit("mouse", message);
// }

function keyPressed() {
  console.log(key);
  if(key === "m"){
    myFood = latte;
  } if (key === "e") {
    myFood = uova;
  } if (key === "b") {
    myFood = burro;
  } if (key === "t") {
    myFood = pane;
  } if (key === "a") {
    myFood = mela;
  } if (key=== "p") {
    myFood = pasta;
  } if (key==="w") {
    myFood=vino;
  } if (key==="g") {
    myFood=aglio;
  } if (key==="o") {
    myFood=cipolla;
  } if (key==="c") {
    myFood=carne;
  } if (key==="s") {
    myFood = insalata;
  } if (key==="r") {
  myFood = patate
  } if (key==="i") {
    myFood= pomodoro
  }
}
