//Monzon Timoteo
//https://youtu.be/z-dRWxF_DB8

const ancho = 640;
const alto = 480;

let estadoJuego = 0;

let imgPueblerinos = [];
let imgRey;
let musicaFondo;
let imgFondoJuego;

let personajes = [];
const cantidadPueblerinos = 60;

let gestor;
let elEmperador;
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
  createCanvas(ancho, alto);

  gestor = new GestorDeEscenas();
  tiempoDeJuego = new Temporizador(30);
}

function draw() {
  background(150, 200, 255);

  if (estadoJuego === 0) {
    gestor.dibujarMenuPrincipal();
  } else if (estadoJuego === 1) {
    gestor.dibujarInstrucciones();
  } else if (estadoJuego === 2) {
    gestor.dibujarCreditos();
  } else if (estadoJuego === 3) {
    dibujarJuegoActivo();
  } else if (estadoJuego === 4) {
    gestor.dibujarPantallaGanar();
  } else if (estadoJuego === 5) {
    dibujarPantallaPerder();
  }
}

function dibujarJuegoActivo() {
  imageMode(CORNER);
  image(imgFondoJuego, 0, 0, ancho, alto);
  for (let i = 0; i < personajes.length; i++) {
    personajes[i].dibujar();
  }

  tiempoDeJuego.tiempo();

  if (tiempoDeJuego.obtenerTiempoRestante() === 0) {
    estadoJuego = 5;
  }
}

function dibujarPantallaPerder() {
  gestor.dibujarPantallaPerder(tiempoDeJuego.obtenerTiempoRestante());
}

function mousePressed() {

  if (estadoJuego === 0) {
    if (gestor.botonJugar.fueClickeado(mouseX, mouseY)) {
      gestor.iniciarJuego();
      if (!musicaFondo.isPlaying()) {
        musicaFondo.loop();
      }
    } else if (gestor.botonInstrucciones.fueClickeado(mouseX, mouseY)) {
      estadoJuego = 1;
    } else if (gestor.botonCreditos.fueClickeado(mouseX, mouseY)) {
      estadoJuego = 2;
    }
  } else if (estadoJuego === 1 || estadoJuego === 2) {
    if (gestor.botonVolver.fueClickeado(mouseX, mouseY)) {
      estadoJuego = 0;
    }
  } else if (estadoJuego === 3) {
    if (elEmperador.fueClickeado(mouseX, mouseY)) {
      estadoJuego = 4;
    }
  } else if (estadoJuego === 4 || estadoJuego === 5) {
    if (gestor.botonReiniciar.fueClickeado(mouseX, mouseY)) {
      estadoJuego = 0;
    }
  }
}
