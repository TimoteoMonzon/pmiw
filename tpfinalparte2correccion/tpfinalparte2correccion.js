//Monzon Timoteo

let imgPueblerinos = [];
let imgRey, musicaFondo, imgFondoJuego;
let gestor;
let tiempoDeJuego;

function preload() {
  imgFondoJuego = loadImage('data/fondojuego.png');
  imgRey = loadImage('data/TimoP_Rey.png');
  imgPueblerinos[0] = loadImage('data/TimoP.png');
  imgPueblerinos[1] = loadImage('data/TimoP1.png');
  imgPueblerinos[2] = loadImage('data/TimoP2.png');
  musicaFondo = loadSound('data/musicBoss1a.ogg');
}

function setup() {
  createCanvas(640, 480);
  gestor = new GestorDeEscenas();
  tiempoDeJuego = new Temporizador(30);
}

function draw() {
  background(150, 200, 255);
  gestor.dibujar();
}

function mousePressed() {
  gestor.click(mouseX, mouseY);
}
