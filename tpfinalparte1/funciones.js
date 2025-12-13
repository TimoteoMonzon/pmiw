function historia(pantalla) {
  fill(255);
  textAlign(LEFT, TOP);
  textSize(24);

  switch(pantalla) {
  case 0:
    textSize(40);
    image (imagenes[pantalla], 0, 0, 640, 480);
    text(texto[pantalla], 110, 45, 420);
    break;
  case 1:
    armarpantalla(pantalla);
    break;
  case 2:
    textSize(30);
    armarpantalla(pantalla);
    pantallapregunta(pantalla, 10, 3);
    break;
  case 3:
    armarpantalla(pantalla);
    break;
  case 4:
    armarpantalla(pantalla);
    break;
  case 5:
    armarpantalla(pantalla);
    break;
  case 6:
    textSize(30);
    armarpantalla(pantalla);
    pantallapregunta(pantalla, 14, 7);
    break;
  case 7:
    textSize(30);
    armarpantalla(pantalla);
    break;
  case 8:
    textSize(40);
    armarpantalla(pantalla);
    break;
  case 9:
    pantallafinal(pantalla);
    break;
  case 10:
    textSize(30);
    armarpantalla(pantalla);
    pantallapregunta(pantalla, 11, 3);
    break;
  case 11:
    textSize(30);
    armarpantalla(pantalla);
    pantallapregunta(pantalla, 12, 15);
    break;
  case 12:
    armarpantalla(pantalla);
    break;
  case 13:
    pantallafinal(pantalla);
    break;
  case 14:
    textSize(22);
    armarpantalla(pantalla);
    pantallapregunta(pantalla, 16, 15)
      break;
  case 15:
    pantallafinal(pantalla);
    break;
  case 16:
    armarpantalla(pantalla);
    break;
  case 17:
    armarpantalla(pantalla);
    break;
  default:
    background(0);
    fill(255, 0, 0);
    textSize(50);
    text("ERROR: Pantalla " + pantalla + " no definida", width/2, height/2);
    break;
  }
}

// Detecta si el ratón está dentro de un área rectangular
function mousedentro(x, y, w, h) {
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    return true;
  } else {
    return false;
  }
}

function armarpantalla(numero) {
  image (imagenes[numero], 0, 0, 640, 480);
  fill(0, 180);
  rect(5, (height/2)+25, width-10, (height/2)-30);
  fill(255);
  textSize(18);
  textAlign(LEFT, TOP);
  text(texto[numero], 15, (height/2)+40, width-20);
}

function pantallapregunta(numero, destinoA, destinoB) {
  armarpantalla(numero);

  // Botones
  let altoBoton = 60;
  let yBoton = height - altoBoton - 20;
  let xA = 60;
  let xB = width - 60 - anchoBoton;

  // Botón A
  fill(0, 180);
  rect(xA, yBoton, anchoBoton, altoBoton, 10);

  // Botón B
  fill(0, 180);
  rect(xB, yBoton, anchoBoton, altoBoton, 10);

  fill(255);
  textSize(20);
  textAlign(CENTER, CENTER);

  // Texto Opción A
  text("no", xA, yBoton, anchoBoton, altoBoton);

  // Texto Opción B
  text("si", xB, yBoton, anchoBoton, altoBoton);
}


function manejarPregunta(numPantalla) {
  // Coordenadas de los botones
  let altoBoton = 60;
  let yBoton = height - altoBoton - 20;
  let xA = 60;
  let xB = width - 60 - anchoBoton;

  let destinoA, destinoB;

  // Destinos
  switch (numPantalla) {
  case 2:
    destinoA = 10;
    destinoB = 3;
    break;
  case 6:
    destinoA = 14;
    destinoB = 7;
    break;
  case 10:
    destinoA = 11;
    destinoB = 3;
    break;
  case 11:
    destinoA = 12;
    destinoB = 3;
    break;
  case 14:
    destinoA = 16;
    destinoB = 15;
    break;
  default:
    return;
  }

  // Comprobar clic en Opción A
  if (mousedentro(xA, yBoton, anchoBoton, altoBoton)) {
    pantalla = destinoA;
    print("Elegiste Opción A. Nueva Pantalla: " + pantalla);
  }
  // Comprobar clic en Opción B
  else if (mousedentro(xB, yBoton, anchoBoton, altoBoton)) {
    pantalla = destinoB;
    print("Elegiste Opción B. Nueva Pantalla: " + pantalla);
  }
}

//dibujar una pantalla final
function pantallafinal(numero) {
  image (imagenes[numero], 0, 0, 640, 480);
  fill(0, 180);
  rect(5, (height/2)+25, width-10, (height/2)-30);
  fill(255);
  textSize(24);
  textAlign(LEFT, TOP);
  text(texto[numero], 15, (height/2)+40, width-20);
}
