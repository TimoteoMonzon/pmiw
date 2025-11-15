class Interfaz {
  constructor(tiempoLimiteSegundos) {
    this.tiempoLimite = tiempoLimiteSegundos * 1000;
    this.tiempoInicio = millis();
    this.tiempoFinalizado = 0; 
  }

  dibujar(estadoJuego) {
    let tiempoTranscurrido;

    if (estadoJuego === 'JUGANDO') {
        tiempoTranscurrido = millis() - this.tiempoInicio;
        this.tiempoFinalizado = tiempoTranscurrido;
    } else {
        tiempoTranscurrido = this.tiempoFinalizado; 
    }
    
    let tiempoRestante = max(0, this.tiempoLimite - tiempoTranscurrido);
    
    let segundos = floor(tiempoRestante / 1000);
    let minutos = floor(segundos / 60);
    segundos %= 60;
    let tiempoTexto = nf(minutos, 2) + ':' + nf(segundos, 2);

    //texto del tiempo
    fill(0);
    textSize(24);
    textAlign(RIGHT, TOP);
    text('Tiempo: ' + tiempoTexto, width - 20, 20);

    // Muestra el mensaje de estado final
    if (estadoJuego !== 'JUGANDO' && estadoJuego !== 'MENU') {
      textAlign(CENTER, CENTER);
      textSize(64);
      if (estadoJuego === 'GANADO') {
        fill(0, 150, 0); 
        text('¡FELICIDADES! ¡ENCONTRASTE AL REY!', width / 2, height / 2);
      } else if (estadoJuego === 'PERDIDO') {
        fill(150, 0, 0); 
        text('¡TIEMPO AGOTADO! PERDISTE', width / 2, height / 2);
      }
    }
  }

  seAcaboElTiempo() {
    return (millis() - this.tiempoInicio) >= this.tiempoLimite;
  }
}
