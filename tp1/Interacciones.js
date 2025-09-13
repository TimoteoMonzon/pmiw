function interaccionEllipse(tam) {
  if (mouseIsPressed) {
    noStroke();
    fill(131);
    ellipse(mouseX, mouseY, tam * 2, tam * 2);
  }
}

function keyPressed() {
  if (key === ' ') {
    Gris = true;
  }
}

function keyReleased() {
  if (key === 'r' || key === 'R') {
    Gris = false;
  }
}
