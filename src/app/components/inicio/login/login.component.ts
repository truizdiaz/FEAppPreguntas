import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from '../../../models/usuario';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup;

  constructor(private fb: FormBuilder, 
              private toastr: ToastrService, 
              private router: Router) {
    this.login = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  log(): void{
    console.log(this.login);

    const usuario: Usuario = {
      nombreUsuario: this.login.value.usuario,
      password: this.login.value.password
    }

    if (usuario.nombreUsuario === 'truizdiaz' && usuario.password === 'admin123'){
      this.login.reset();
      this.router.navigate(['/dashboard']);
    } else {
      this.toastr.error('Usuario o contraseña incorrecto', 'Error');
      this.login.reset();
    }
    console.log(usuario);
  }

}
