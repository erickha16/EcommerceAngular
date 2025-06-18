import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  tipoAlerta: string = 'exito'; 

  cambiarAlerta(nuevoTipo: string) {
    this.tipoAlerta = nuevoTipo;
  } 
}
