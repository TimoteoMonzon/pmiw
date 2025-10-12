function historia(pantalla) {
  switch(pantalla) {
  case 0:
    textSize(40);
    image (imagenes[pantalla], 0, 0, 640, 480);
    text(texto[pantalla], 110, 45, 420);
    break;
  case 1:
    textSize(40);
    armarpantalla(pantalla);

    //if ( !ambiente[0].isPlaying() ) {
    //ambiente [0].loop();
    //}
    break;
  case 2:
    pantallapregunta(pantalla);
    //if ( !ambiente[0].isPlaying() ) {
    //ambiente [0].loop();
    //}
    if (pantallapregunta==pantalla) {
      pantalla=11;
    }
    break;
  case 3:
    armarpantalla(pantalla);
    //if ( !ambiente[0].isPlaying() ) {
    //ambiente [1].loop();
    //}
    break;
  case 4:
    armarpantalla(pantalla);
    //if ( !ambiente.isPlaying() ) {
    //ambiente [1].loop();
    //}
    break;
  case 5:
    armarpantalla(pantalla);
    //if ( !ambiente.isPlaying() ) {
    //ambiente [1].loop();
    //}
    break;
  case 6:
    armarpantalla(pantalla);
    //if ( !ambiente.isPlaying() ) {
    //ambiente [2].loop();
    //}
    break;
  case 7:
    textSize(30);
    armarpantalla(pantalla);
    //if ( !ambiente.isPlaying() ) {
    //ambiente [2].loop();
    //}
    break;
  case 8:
    textSize(40);
    armarpantalla(pantalla);
    //if ( !ambiente.isPlaying() ) {
    //ambiente [3].loop();
    //}
    break;
  case 9:
    pantallafinal(pantalla);
    //if ( !ambiente.isPlaying() ) {
    //ambiente [4].loop();
    //}
    break;
  case 10:
    pantallapregunta(pantalla);
    //if ( !ambiente[0].isPlaying() ) {
    //ambiente [0].loop();
    //}
    if (pantallapregunta==pantalla) {
      pantalla=3;
    }
    
    break;
  case 11:
    pantallapregunta(pantalla);
    //if ( !ambiente[0].isPlaying() ) {
    //ambiente [0].loop();
    //}
    if (pantallapregunta==pantalla) {
      pantalla=3;
    }
    break;
  case 12:
    pantallapregunta(pantalla);
    //if ( !ambiente[0].isPlaying() ) {
    //ambiente [0].loop();
    //}
    if (pantallapregunta==pantalla) {
      pantalla=3;
    }
    break;
  case 13:
    pantallafinal(pantalla);
    //if ( !ambiente.isPlaying() ) {
    //ambiente [7].loop();
    //}
    break;
  case 14:
    armarpantalla(pantalla);
    //if ( !ambiente.isPlaying() ) {
    //ambiente [9].loop();
    //}
    break;
  case 15:
    pantallafinal(pantalla);
    //if ( !ambiente.isPlaying() ) {
    //ambiente [8].loop();
    //}
    break;
  case 16:
    armarpantalla(pantalla);
    //if ( !ambiente.isPlaying() ) {
    //ambiente [8].loop();
    //}
    break;
  case 17:
    armarpantalla(pantalla);
    //if ( !ambiente.isPlaying() ) {
    //ambiente [9].loop();
    //}
    break;
  default:
    square(0, 0, 640, 480);
    text("ERROR", 0, width/2);
    break;
  }
}
function mousedentro( x, y, tam) {
  if ((mouseX<x+(tam*2))&&(mouseX>x)&&(mouseY<y+tam)&&(mouseY>y)) {
    return true;
  } else {
    return false;
  }
}
function armarpantalla(numero) {
  image (imagenes[numero], 0, 0, 640, 480);
  fill(0, 135);
  rect(5, (height/2)+25, width-10, (height/2)-10);
  fill(255);
  text(texto[numero], 7, (height/2)+30, width-7);
}
function pantallapregunta(numero) {
  fill(0, 135);
  let tamaño=60;
  fill(0, 0);
  rect(60, 400, tamaño*2, tamaño);
  rect(520, 400, tamaño*2, tamaño);
  if (mousedentro(60, 400, tamaño)==true) {
    fill(255, 175);
    if (mouseIsPressed==true) {
      return pantalla++;
    }
  }
  if (mousedentro(520, 400, tamaño)==true) {
    fill(255, 175);
    if (mouseIsPressed==true) {
      return pantalla;
    }
  }
  text(texto[numero], 7, (height/2)+30, width-7);
  rect()
}
function pantallafinal(numero) {
  image (imagenes[numero], 0, 0, 640, 480);
  fill(0, 135);
  rect(5, (height/2)+25, width-10, (height/2)-10);
  fill(255);
  text(texto[numero], 7, (height/2)+30, width-7);
}
