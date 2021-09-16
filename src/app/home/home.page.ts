import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
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
  constructor() { 
    this.nombre = "Daniel";
  }

  
  ngOnInit() {
  }
}
