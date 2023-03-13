import { UsuarioPipe } from './../../pipes/usuario.pipe';
import { Router } from '@angular/router';
import { UsuarioService } from './../../service/usuario.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUsuario } from './../../models/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario!: IUsuario;
  formUsuario!: FormGroup;
  listaUsuarios:IUsuario[]=[];
  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  passwordPattern: string = '^[0-9]+$';

  constructor(private serviceUsuario: UsuarioService, private router: Router, private pipe: UsuarioPipe){}

  ngOnInit(): void {
    this.getListaUsuarios();
    this.criaForm();
  }
  criaForm(){
    this.formUsuario = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern(this.emailPattern)]),
      senha: new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern(this.passwordPattern)])
    });
  }

  get email(){
    return this.formUsuario.get('email')!;
  }

  get senha(){
    return this.formUsuario.get('senha')!;
  }

  async getListaUsuarios(){
   this.serviceUsuario.getUsuarios().subscribe((usuarios) => {
      this.listaUsuarios = usuarios;


    })
  }

  validaUsuario(){


   return this.listaUsuarios.find((usuario)=>{
      if(usuario.email === this.email.value){
        if(usuario.senha == this.senha.value){
          this.usuario = usuario;
          return true;
        }

      }
      alert('Email ou senha inválidos!')
      return false;

    })

  }

  extrairUsuario(){
    const userName = this.pipe.transform(this.usuario.email);
    console.log();

    localStorage.setItem('userName', userName);
  }

  onSubmit(){

    if(this.validaUsuario()){

      this.extrairUsuario();
      this.router.navigate(['/home'])
    }

  }

}
