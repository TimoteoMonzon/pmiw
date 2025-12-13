class Temporizador {
  
  constructor(duracionSegundos) {
    this.duracion = duracionSegundos * 1000;
    this.tiempoInicio = 0; 
  }

  iniciar() {
    this.tiempoInicio = millis();
  }

  obtenerTiempoRestante() {
    let tiempoTranscurrido = millis() - this.tiempoInicio;
    let restante = max(0, this.duracion - tiempoTranscurrido);
    
    return floor(restante / 1000); 
  }

  tiempo() {
    let tiempo = this.obtenerTiempoRestante();
    
    fill(255, 0, 0); 
    textSize(36);
    textAlign(RIGHT, TOP);
    text("tiempo: " + tiempo, ancho - 20, 20); 
  }
}
