import { Injectable } from '@angular/core';
import { Estudiante } from './estudiante.model';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  
  private estudiante: Estudiante[] = [
    {
      id    : 1, 
      nombre: 'Daniel Orellana',
      sede : 'Plaza Oeste',
      seccion : Number('001')
    }
  ]
  constructor() { }

  getPersonas()
  {
    return this.estudiante
  }
}
