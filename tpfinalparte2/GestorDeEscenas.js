class GestorDeEscenas {

  constructor() {
    let anchoBoton = 200;
    let altoBoton = 50;
    let xCentro = ancho / 2 - anchoBoton / 2;

    this.botonJugar = new Boton(xCentro, 200, anchoBoton, altoBoton, "jugar");
    this.botonInstrucciones = new Boton(xCentro, 270, anchoBoton, altoBoton, "instrucciones");
    this.botonCreditos = new Boton(xCentro, 340, anchoBoton, altoBoton, "creditos");

    this.botonVolver = new Boton(20, alto - 60, 100, 40, "volver");
    this.botonReiniciar = new Boton(xCentro, 300, 200, 50, "reiniciar");
  }

  iniciarJuego() {
    personajes = [];

    for (let i = 0; i < cantidadPueblerinos; i++) {
      let randX = random(50, ancho - 50);
      let randY = random(50, alto - 50);

      let randImg = random(imgPueblerinos);

      let p = new Personaje(randX, randY, randImg, false);
      personajes.push(p);
    }

    let reyX = random(50, ancho - 50);
    let reyY = random(50, alto - 50);

    elEmperador = new Personaje(reyX, reyY, imgRey, true);
    personajes.push(elEmperador);

    tiempoDeJuego.iniciar();
    estadoJuego = 3;
  }

  dibujarMenuPrincipal() {
    fill(50);
    textSize(48);
    textAlign(CENTER, TOP);
    text("Buscando al Emperador", ancho / 2, 80);

    this.botonJugar.dibujar();
    this.botonInstrucciones.dibujar();
    this.botonCreditos.dibujar();
  }

  dibujarInstrucciones() {
    fill(50);
    textSize(36);
    textAlign(CENTER, TOP);
    text("instrucciones", ancho / 2, 80);

    textSize(18);
    textAlign(LEFT, TOP);
    let textoInstrucciones =
      "el emperador tiene un vestido invisible. " +
      "tu tarea es encontrarlo en la multitud.\n\n" +
      "objetivo:\n" +
      "haz click en el emperador antes de que el tiempo se agote.\n\n" +
      "reglas (conflicto ludico):\n" +
      "- tienes 30 segundos. si llegan a 0, pierdes.";

    text(textoInstrucciones, 50, 150, ancho - 100, alto - 150);

    this.botonVolver.dibujar();
  }

  dibujarCreditos() {
    fill(50);
    textSize(36);
    textAlign(CENTER, TOP);
    text("creditos", ancho / 2, 80);

    textSize(18);
    text(
    "cuento base: el vestido nuevo del emperador\n"+ "Integrantes Timoteo Monzón", ancho / 2, alto / 2);

    this.botonVolver.dibujar();
  }

  dibujarPantallaGanar() {
    fill(0, 150, 0);
    textSize(48);
    textAlign(CENTER, CENTER);
    text("ganaste", ancho / 2, alto / 2 - 50);
    textSize(24);
    text("¡encontraste al emperador!", ancho / 2, alto / 2);

    this.botonReiniciar.dibujar();
  }

  dibujarPantallaPerder(tiempoRestante) {
    fill(150, 0, 0);
    textSize(48);
    textAlign(CENTER, CENTER);
    text("perdiste", ancho / 2, alto / 2 - 50);

    textSize(24);
    if (tiempoRestante === 0) {
      text("se acabó el tiempo.", ancho / 2, alto / 2 );
    }
    this.botonReiniciar.dibujar();
  }
}
