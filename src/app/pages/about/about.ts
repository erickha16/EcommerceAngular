import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  // Propiedades para controlar el estilo
    backgroundColor: string = '#ffffff'; 
    textColor: string = '#000000';

    colores: string[] = [
      '#ff5733', // Rojo
      '#33ff57', // Verde
      '#3357ff', // Azul
      '#f033ff', // Rosa
      '#ff33f0', // Morado
      '#33fff0', // Turquesa
    ];

    // Método para cambiar el color
    cambiarColor() {
      // Color de fondo aleatorio
      const randomBgColor = this.colores[Math.floor(Math.random() * this.colores.length)];
      this.backgroundColor = randomBgColor;

      // Cambiar el color del texto para que sea legible (blanco o negro según el fondo)
      this.textColor = this.esColorClaro(randomBgColor) ? '#000000' : '#ffffff';
    }

    // Función auxiliar para determinar si un color es "claro"
    private esColorClaro(hexColor: string): boolean {
      const r = parseInt(hexColor.substr(1, 2), 16);
      const g = parseInt(hexColor.substr(3, 2), 16);
      const b = parseInt(hexColor.substr(5, 2), 16);
      const luminosidad = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
      return luminosidad > 0.5;
    }
}
