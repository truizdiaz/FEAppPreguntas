import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Pregunta } from 'src/app/models/pregunta';

@Component({
  selector: 'app-nueva-pregunta',
  templateUrl: './nueva-pregunta.component.html',
  styleUrls: ['./nueva-pregunta.component.css']
})
export class NuevaPreguntaComponent implements OnInit {
  nuevaPregunta: FormGroup;
  pregunta: Pregunta;
  rtaCorrecta = 0;
  constructor(private fb: FormBuilder,
              private toastr: ToastrService) {
  this.nuevaPregunta = this.fb.group({
    titulo: ['', Validators.required],
    respuestas: this.fb.array([])
  })

  }

  ngOnInit(): void {
    this.agregarRespuestasPorDefecto();
  }

  // Devuelve FormArray de respuestas
  get getRespuestas(): FormArray {
    return this.nuevaPregunta.get('respuestas') as FormArray;
  }

  // Agregar respuesta al array
  agregarRespuesta(): void {
    this.getRespuestas.push(this.fb.group({
      descripcion: ['', Validators.required],
      esCorrecta: 0
    }));
  }

  agregarRespuestasPorDefecto(): void{
    this.agregarRespuesta();
    this.agregarRespuesta();
  }

  eliminarRespuesta(index: number): void{
    if (this.getRespuestas.length === 2){
      this.toastr.error('Como minimo la pregunta debe contener 2 respuestas', 'Error!');
    } else {
      this.getRespuestas.removeAt(index);
    }
  }
  setRespuestaValida(index: number): void {
    this.rtaCorrecta = index;
  }

}
