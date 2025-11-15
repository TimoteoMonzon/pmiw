class GestorJuego {
  constructor(tiempoLimiteSegundos, numDistractores, tamPersonaje, imgRey, imagenesDistractores) {
    this.estado = 'MENU'; 
    this.interfaz = new Interfaz(tiempoLimiteSegundos); 
    this.menu = new Menu(imgRey); 
    this.elementos = []; 
    this.rey = null;     

    this.inicializarEscena(numDistractores, tamPersonaje, imgRey, imagenesDistractores);
  }
  
  inicializarEscena(numDistractores, tamPersonaje, imgRey, imagenesDistractores) {
    // El rango de aparición de 100 en Y hasta 480
    const MIN_Y = 100;
    const MAX_Y = 480; 
    for (let i = 0; i < numDistractores; i++) {
      let x = random(0, width - tamPersonaje);
      // Posición Y restringida: de 100 hasta 480 menos el tamaño
      let y = random(MIN_Y, MAX_Y - tamPersonaje); 
      let imagenAleatoria = random(imagenesDistractores); 
      
      this.elementos.push(new Distractor(x, y, tamPersonaje, imagenAleatoria));
    }

    // Crear al Rey
    let xRey = random(0, width - tamPersonaje);
    let yRey = random(MIN_Y, MAX_Y - tamPersonaje); // Posición Y restringida para el Rey
    this.rey = new Rey(xRey, yRey, tamPersonaje, imgRey);
  }

  dibujar() {
    // Dibuja todos los distractores (capa inferior)
    for (let elemento of this.elementos) {
      elemento.dibujar();
    }
    
    // Dibuja el Rey (capa superior)
    if (this.rey) {
        this.rey.dibujar();
    }

    // Dibuja el MENÚ o la INTERFAZ (dependiendo del estado)
    if (this.estado === 'MENU') {
        this.menu.dibujar(); 
    } else {
        this.interfaz.dibujar(this.estado);
    }
  }

  manejarClick(mouseX, mouseY) {
    if (this.estado === 'MENU') {
        if (this.menu.esBotonClickeado(mouseX, mouseY)) {
            this.estado = 'JUGANDO'; 
            this.interfaz.tiempoInicio = millis(); // Reinicia el cronómetro
        }
    } else if (this.estado === 'JUGANDO' && this.rey) {
        // Lógica de clic ganador (solo el Rey tiene hitbox)
        if (this.rey.esClickeado(mouseX, mouseY)) {
            this.estado = 'GANADO'; 
        }
    }
  }

  actualizar() {
    if (this.estado === 'JUGANDO' && this.interfaz.seAcaboElTiempo()) {
      this.estado = 'PERDIDO'; 
    }
  }
}
