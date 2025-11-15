class Menu {
  constructor(imgRey) {
    this.imgRey = imgRey; 
    this.anchoBoton = 150;
    this.altoBoton = 50;
    this.xCentro = width / 2;
    this.yBoton = height * 0.8; 
  }

  dibujar() {
    background(0, 0, 0, 200); 

    textAlign(CENTER, CENTER);
    fill(255);
    textSize(48);
    text("BUSCANDO AL REY", this.xCentro, height * 0.1);
    textSize(18);
    text("¡El Rey ha sido secuestrado y escondido entre la multitud!", 
         this.xCentro, height * 0.3);
         

    let yInstruccion = height * 0.35;
    

    textAlign(RIGHT);

    let xTextoRey = this.xCentro - textWidth(" desfilando") / 2 - 50;
    text("Encuentra al", xTextoRey, yInstruccion);
    

    textAlign(LEFT);
    let xInicioPalabraRey = xTextoRey + 5;
    text("Rey", xInicioPalabraRey, yInstruccion);


    let imgtam = 30;
    let xInicioImagen = xInicioPalabraRey + textWidth("Rey") + 5;
    image(this.imgRey, 
          xInicioImagen, 
          yInstruccion - imgtam / 2,
          imgtam, 
          imgtam); 
          

    let xInicioDesfilando = xInicioImagen + imgtam + 5;
    text("desfilando", xInicioDesfilando, yInstruccion);
    
    textAlign(CENTER, CENTER);
    text("Tienes dos minutos para encontrarlo.", 
         this.xCentro, height * 0.4);

    let xBoton = this.xCentro - this.anchoBoton / 2;
    let yBoton = this.yBoton - this.altoBoton / 2;

    fill(0, 200, 0); 
    rect(xBoton, yBoton, this.anchoBoton, this.altoBoton, 10); 
    
    fill(255); 
    textSize(24);
    text("EMPEZAR", this.xCentro, this.yBoton);
  }

  esBotonClickeado(mouseX, mouseY) {
    let xBoton = this.xCentro - this.anchoBoton / 2;
    let yBoton = this.yBoton - this.altoBoton / 2;
    
    return mouseX > xBoton && 
           mouseX < xBoton + this.anchoBoton &&
           mouseY > yBoton &&
           mouseY < yBoton + this.altoBoton;
  }
}
