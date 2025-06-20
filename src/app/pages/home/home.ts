import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

//Esto hace referencia al componente de la página de home 
@Component({
  selector: 'app-home', //Nos permite identificar el componente en el HTML(la etiqueta <app-home>)
  imports: [CommonModule], // Aquí se pueden importar otros componentes, directivas o pipes si es necesario
  templateUrl: './home.html', // La plantilla HTML del componente
  styleUrl: './home.css' // La hoja de estilos CSS del componente
})
export class Home {
   usuarioActivo: boolean = false; // Estado inicial

  // Método para cambiar el estado
  alternarEstado() {
    this.usuarioActivo = !this.usuarioActivo;
  }
}
