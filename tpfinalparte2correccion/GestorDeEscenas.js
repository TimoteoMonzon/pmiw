class GestorDeEscenas {

  constructor() {
    this.estado = 0;
    this.personajes = [];
    this.elEmperador = false;
    this.cantidad = 60;

    let anchoBoton = 200;
    let altoBoton = 50;
    let xCentro = 640 / 2 - anchoBoton / 2;

    this.botonJugar = new Boton(xCentro, 200, anchoBoton, altoBoton, "jugar");
    this.botonInstrucciones = new Boton(xCentro, 270, anchoBoton, altoBoton, "instrucciones");
    this.botonCreditos = new Boton(xCentro, 340, anchoBoton, altoBoton, "creditos");
    this.botonVolver = new Boton(20, 480 - 60, 100, 40, "volver");
    this.botonReiniciar = new Boton(xCentro, 300, 200, 50, "reiniciar");
  }

  dibujar() {
    if (this.estado === 0) {
      this.dibujarMenuPrincipal();
    } else if (this.estado === 1) {
      this.dibujarInstrucciones();
    } else if (this.estado === 2) {
      this.dibujarCreditos();
    } else if (this.estado === 3) {
      this.dibujarJuegoActivo();
    } else if (this.estado === 4) {
      this.dibujarPantallaGanar();
    } else if (this.estado === 5) {
      this.dibujarPantallaPerder();
    }
  }

  iniciarJuego() {
    this.personajes = [];

    for (let i = 0; i < this.cantidad; i++) {
      let p = new Personaje(random(50, 590), random(50, 430), random(imgPueblerinos), false);
      this.personajes.push(p);
    }

    this.elEmperador = new Personaje(random(50, 590), random(50, 430), imgRey, true);
    this.personajes.push(this.elEmperador);

    tiempoDeJuego.iniciar();
    this.estado = 3;
  }

  dibujarJuegoActivo() {
    imageMode(CORNER);
    image(imgFondoJuego, 0, 0, 640, 480);

    for (let i = 0; i < this.personajes.length; i++) {
      this.personajes[i].dibujar();
    }

    tiempoDeJuego.tiempo();

    if (tiempoDeJuego.obtenerTiempoRestante() === 0) {
      this.estado = 5;
    }
  }

  click(mx, my) {
    if (this.estado === 0) {
      if (this.botonJugar.fueClickeado(mx, my)) {
        this.iniciarJuego();
        if (!musicaFondo.isPlaying()) {
          musicaFondo.loop();
        }
      } else if (this.botonInstrucciones.fueClickeado(mx, my)) {
        this.estado = 1;
      } else if (this.botonCreditos.fueClickeado(mx, my)) {
        this.estado = 2;
      }
    } else if (this.estado === 1 || this.estado === 2) {
      if (this.botonVolver.fueClickeado(mx, my)) {
        this.estado = 0;
      }
    } else if (this.estado === 3) {
      if (this.elEmperador.fueClickeado(mx, my)) {
        this.estado = 4;
      }
    } else if (this.estado === 4 || this.estado === 5) {
      if (this.botonReiniciar.fueClickeado(mx, my)) {
        this.estado = 0;
      }
    }
  }

  dibujarMenuPrincipal() {
    fill(50);
    textSize(48);
    textAlign(CENTER, TOP);
    text("Buscando al Emperador", 320, 80);
    this.botonJugar.dibujar();
    this.botonInstrucciones.dibujar();
    this.botonCreditos.dibujar();
  }

  dibujarInstrucciones() {
    fill(50);
    textSize(36);
    textAlign(CENTER, TOP);
    text("instrucciones", 320, 80);
    textSize(18);
    textAlign(LEFT, TOP);
    let textoInstrucciones =
      "el emperador tiene un vestido invisible. " +
      "tu tarea es encontrarlo en la multitud.\n\n" +
      "objetivo:\n" +
      "haz click en el emperador antes de que el tiempo se agote.\n\n" +
      "reglas (conflicto ludico):\n" +
      "- tienes 30 segundos. si llegan a 0, pierdes.";

    text(textoInstrucciones, 50, 150, 640 - 100, 480 - 150);
    this.botonVolver.dibujar();
  }

  dibujarCreditos() {
    fill(50);
    textSize(36);
    textAlign(CENTER, TOP);
    text("creditos", 320, 80);
    textSize(18);
    textAlign(CENTER, CENTER);
    let textoCreditos =
      "cuento base: el vestido nuevo del emperador\n" +
      "Integrantes Timoteo Monzón";

    text(textoCreditos, 50, 150, 640 - 100, 480 - 300);

    this.botonVolver.dibujar();
  }

  dibujarPantallaGanar() {
    fill(0, 150, 0);
    textSize(48);
    textAlign(CENTER, CENTER);
    text("ganaste", 640 / 2, 480 / 2 - 50);
    textSize(24);
    text("¡encontraste al emperador!", 640 / 2, 480 / 2);

    this.botonReiniciar.dibujar();
  }

  dibujarPantallaPerder(tiempoRestante) {
    fill(150, 0, 0);
    textSize(48);
    textAlign(CENTER, CENTER);
    text("perdiste", 320, 190);
    textSize(24);
    text("se acabó el tiempo.", 640 / 2, 480 / 2 );
    this.botonReiniciar.dibujar();
  }
}
