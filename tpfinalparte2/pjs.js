class Personaje {
  constructor(x, y, tam) {
    this.x = x;
    this.y = y;
    this.tam = tam;
  }

  // Hitbox de la imagen (cuadrada)
  esClickeado(mouseX, mouseY) {
    return mouseX > this.x && mouseX < this.x + this.tam &&
      mouseY > this.y && mouseY < this.y + this.tam;
  }
}

class Distractor extends Personaje {
  constructor(x, y, tam, imagen) {
    super(x, y, tam);
    this.imagen = imagen;
  }

  dibujar() {
    // Dibuja la imagen
    image(this.imagen, this.x, this.y, this.tam, this.tam);
  }
}

class Rey extends Personaje {
  constructor(x, y, tam, imagen) {
    super(x, y, tam);
    this.imagen = imagen;
  }

  dibujar() {
    // Dibuja la imagen del Rey
    image(this.imagen, this.x, this.y, this.tam, this.tam);
  }
}
