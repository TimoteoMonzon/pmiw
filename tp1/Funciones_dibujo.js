function dibujoEllipse(cantidad, tam, gris, posX) {
  for (let i = 0; i < cantidad; i++) {
    for (let j = 0; j < cantidad; j++) {
      noStroke();
      let estaSobreEllipse = mouseSobreEllipse(i * 56 + 458, j * 62 - 11, tam);
      
      if (gris && !estaSobreEllipse) {
        fill(131);
      } else {
        fill(255);
      }
      ellipse(i * posX + 458, j * 62 - 11, tam, tam);
    }
  }
}

function dibujoRect(cantidad, posY, posX, desplazamiento) {
  for (let i = 0; i < cantidad; i++) {
    for (let j = 0; j < cantidad; j++) {
      noStroke();
      fill(0);
      rect(i * posX + desplazamiento, j * posY - 3, 41, 45);
    }
  }
}

function mouseSobreEllipse(x, y, d) {
  let distancia = dist(mouseX, mouseY, x, y);
  return distancia <= d / 2;
}
