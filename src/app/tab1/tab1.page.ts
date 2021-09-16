import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  // atributos
  nombre : string;
  sede : string;
  seccion : number;
  lista : [];
  listado = [
    { id : '1',
      nombre: 'Daniel Orellana',
      sede: 'Plaza Oeste',
      seccion: '001'
    },
  ] 

  constructor(private router: Router) {
  this.nombre = "Daniel";
  this.sede = "Plaza Oeste"
  this.seccion = Number("001");
 }

ngOnInit() {
}

ingresar()
{
  this.router.navigate(['/home']);
}


}
