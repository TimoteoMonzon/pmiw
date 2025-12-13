class Personaje {

  constructor(x, y, imagen, esEmperador) {
    this.x = x;
    this.y = y;
    this.imagen = imagen;
    this.ancho = 30;
    this.alto = 30;
    this.esElEmperador = esEmperador;
  }

  dibujar() {
    imageMode(CENTER);
    image(this.imagen, this.x, this.y, this.ancho, this.alto);
  }

  fueClickeado(mx, my) {
    return mx > this.x - this.ancho / 2 &&
      mx < this.x + this.ancho / 2 &&
      my > this.y - this.alto / 2 &&
      my < this.y + this.alto / 2;
  }
}
