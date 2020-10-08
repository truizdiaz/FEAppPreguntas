import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pregunta } from 'src/app/models/pregunta';
import { CuestionarioService } from 'src/app/services/cuestionario.service';
import { RespuestaCuestionarioService } from 'src/app/services/respuesta-cuestionario.service';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {
  idCuestionario: number;
  listPreguntas: Pregunta[] = [];

  constructor(private respuestaCuestionarioService: RespuestaCuestionarioService,
              private cuestionarioService: CuestionarioService,
              private router: Router) { }

  ngOnInit(): void {
    this.idCuestionario = this.respuestaCuestionarioService.idCuestionario;
    if (this.idCuestionario == null){
      this.router.navigate(['/inicio']);
      return;
    }
    this.getCuestionario();
  }

  getCuestionario(): void {
    this.cuestionarioService.getCuestionario(this.idCuestionario).subscribe(data =>{
      console.log(data);
      this.listPreguntas = data.listPreguntas;
    });
  }

  obtenerPregunta(): string {
    return this.listPreguntas[0].descripcion;
  }

  getIndex(): number {
    return 0;
  }



}
