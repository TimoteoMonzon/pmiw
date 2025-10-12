
//https://youtu.be/em0o8CkFysE
let imagenes = [];
let texto;
let pantalla = 0;
let ambiente = [];
let timer=0;
function preload() {
  soundFormats('ogg');
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
  ambiente [0] = loadSound('data/musicBoss1a.ogg');
  ambiente [1] = loadSound('data/musicBoss2a.ogg');
  ambiente [2] = loadSound('data/musicBoss3a.ogg');
  ambiente [3] = loadSound('data/musicBoss1b.ogg');
  ambiente [4] = loadSound('data/musicBoss2b.ogg');
  ambiente [5] = loadSound('data/musicBoss3b.ogg');
  ambiente [6] = loadSound('data/musicBoss1c.ogg');
  ambiente [7] = loadSound('data/musicBoss2c.ogg');
  ambiente [8] = loadSound('data/musicBoss3c.ogg');
  texto = loadStrings("data/historia.txt");
}
function setup() {
  createCanvas (640, 480);
  ambiente[0, 1, 2, 3, 4, 5, 6, 7, 8].setVolume(0.1);
}
function draw() {
  historia(pantalla);
}
function keyPressed() {
  if (key== 'c') {
    pantalla++;
    if (pantalla > 16) {
      pantalla = 0;
    }
    print(pantalla);
  }
}
