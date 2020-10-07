import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RespuestaCuestionarioService } from 'src/app/services/respuesta-cuestionario.service';

@Component({
  selector: 'app-ingresar-nombre',
  templateUrl: './ingresar-nombre.component.html',
  styleUrls: ['./ingresar-nombre.component.css']
})
export class IngresarNombreComponent implements OnInit {
  nombreParticiante = '';

  constructor(private router: Router, 
              private respuestaCuestionario: RespuestaCuestionarioService) { }

  ngOnInit(): void {
  }

  siguiente(): void {
    this.respuestaCuestionario.nombreParticiante = this.nombreParticiante;
    this.router.navigate(['/inicio/pregunta']);

  }

}
