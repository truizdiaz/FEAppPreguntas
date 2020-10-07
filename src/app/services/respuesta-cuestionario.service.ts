import { Injectable } from '@angular/core';
import { Cuestionario } from '../models/cuestionario';

@Injectable({
  providedIn: 'root'
})
export class RespuestaCuestionarioService {
  nombreParticiante: string;
  idCuestionario: number;
  respuestas: number[] = [];
  cuestionario: Cuestionario;
  
  constructor() { }
}
