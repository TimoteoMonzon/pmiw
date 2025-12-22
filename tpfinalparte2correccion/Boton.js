class Boton {

  constructor(x, y, w, h, texto) {
    this.x = x;
    this.y = y;
    this.ancho = w;
    this.alto = h;
    this.texto = texto;
  }

  dibujar() {
    rectMode(CORNER);

    fill(230);
    stroke(50);
    rect(this.x, this.y, this.ancho, this.alto, 5);

    fill(50);
    textAlign(CENTER, CENTER);
    textSize(20);
    text(this.texto, this.x + this.ancho / 2, this.y + this.alto / 2);
  }

  fueClickeado(mx, my) {
    return mx > this.x &&
      mx < this.x + this.ancho &&
      my > this.y &&
      my < this.y + this.alto;
  }
}
