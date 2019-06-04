import { Component } from '@angular/core';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
@Component ({
  selector : 'app-prueba',
  templateUrl : './first.component.html',
  styles : ['h2{color:red;}']
})

export class ThisComponent {
  texto = 'Prueba de Icono';
  // faCoffee = faCoffee;
 }
