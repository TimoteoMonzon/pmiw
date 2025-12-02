// Monzon Timoteo
// https://youtu.be/7ahGfFAItEA

let imagenes = [];
let sound;
let texto;
let pantalla = 0;
let timer = 0;
let anchoBoton = 120;

function preload() {
  imagenes [0] = loadImage("data/img0.png");
  imagenes [1] = loadImage("data/img1.png");
  imagenes [2] = loadImage("data/img2.png");
  imagenes [3] = loadImage("data/img3.png");
  imagenes [4] = loadImage("data/img4.png");
  imagenes [5] = loadImage("data/img5.png");
  imagenes [6] = loadImage("data/img6.png");
  imagenes [7] = loadImage("data/img7.png");
  imagenes [8] = loadImage("data/img8.png");
  imagenes [9] = loadImage("data/img9.png");
  imagenes [10] = loadImage("data/img10.png");
  imagenes [11] = loadImage("data/img11.png");
  imagenes [12] = loadImage("data/img12.png");
  imagenes [13] = loadImage("data/img13.png");
  imagenes [14] = loadImage("data/img14.png");
  imagenes [15] = loadImage("data/img15.png");
  imagenes [16] = loadImage("data/img16.png");
  texto = loadStrings("data/historia.txt");
  //sound = loadSound("musicBoss1a.ogg");
}

function setup() {
  createCanvas (640, 480);
  rectMode(CORNER);
  textSize(24);
  textAlign(CENTER, CENTER);
}

function draw() {
  historia(pantalla);
}
function mouseClicked() {
 // if (sound && !sound.isPlaying()) {
 //   sound.loop();
 // }
  const pantallasDecision = [2, 6, 10, 11, 14];


  if (pantallasDecision.includes(pantalla)) {

    manejarPregunta(pantalla);
  } else {
    let nuevaPantalla = pantalla + 1;


    if (pantalla == 16) {
      nuevaPantalla = 8;
    } else if (pantalla == 8) {
      nuevaPantalla = 9;
    } else if (pantalla == 9 || pantalla == 13 || pantalla == 15) {
      nuevaPantalla = 0;
    }

    if (nuevaPantalla > 16 && nuevaPantalla != 0) {
      nuevaPantalla = 0;
    }

    pantalla = nuevaPantalla;
  }
}
