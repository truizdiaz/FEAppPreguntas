import { Component, OnInit } from '@angular/core';
import { CuestionarioService } from 'src/app/services/cuestionario.service';
import { RespuestaCuestionarioService } from 'src/app/services/respuesta-cuestionario.service';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {
  idCuestionario: number;

  constructor(private respuestaCuestionarioService: RespuestaCuestionarioService,
              private cuestionarioService: CuestionarioService) { }

  ngOnInit(): void {
    this.idCuestionario = this.respuestaCuestionarioService.idCuestionario;
    this.getCuestionario();
  }

  getCuestionario(): void {
    this.cuestionarioService.getCuestionario(this.idCuestionario).subscribe(data =>{
      console.log(data);
    });
  }

}
