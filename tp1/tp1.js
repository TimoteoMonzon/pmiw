//https://youtu.be/Si37T2mB7s0
//Monzón Timoteo (comisión 4)

let miFoto;
let repeticiones = 9;
let posX = 56;
let Gris = false;

function preload() {
  miFoto = loadImage('data/F_7.jpeg');
}

function setup() {
  createCanvas(800, 400);
  miFoto.resize(400, 400);
}

function draw() {
  background(131);
  dibujoEllipse(repeticiones, 20, Gris, posX);
  interaccionEllipse(100);
  dibujoRect(repeticiones, 62, posX, 410);
  
  image(miFoto, 0, 0);
}
