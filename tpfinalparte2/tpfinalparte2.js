// Monzon Timoteo
//https://youtu.be/Delpzk4i1Q4

let gestor;
const TIEMPO_LIMITE_MINUTOS = 2;
const NUM_DISTRACTORES = 150;
const TAM_PERSONAJE = 40;

let fondoMapa;
let imgTimoP;
let imgTimoP1;
let imgTimoP2;
let imgRey;

function preload() {
  fondoMapa = loadImage('fondojuego.png');
  imgTimoP = loadImage('TimoP.png');
  imgTimoP1 = loadImage('TimoP1.png');
  imgTimoP2 = loadImage('TimoP2.png');
  imgRey = loadImage('TimoP_Rey.png');
}

function setup() {
  createCanvas(640, 480);

  const imagenesDistractores = [imgTimoP, imgTimoP1, imgTimoP2];

  // Instancia del Gestor de Juego, pasando todas las imágenes
  gestor = new GestorJuego(
    TIEMPO_LIMITE_MINUTOS * 60,
    NUM_DISTRACTORES,
    TAM_PERSONAJE,
    imgRey,
    imagenesDistractores
    );
}

function draw() {
  image(fondoMapa, 0, 0, width, height);
  gestor.dibujar();
  gestor.actualizar();
}

function mousePressed() {
  gestor.manejarClick(mouseX, mouseY);
}
