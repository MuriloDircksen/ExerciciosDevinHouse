import { Router } from '@angular/router';
import { UsuarioService } from '../../service/usuario.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IUsuario, Usuario } from '../../models/usuario';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  usuario!: IUsuario;
  formUsuario!: FormGroup;
  listaUsuarios: IUsuario[] = [];

  constructor(private usuarioService: UsuarioService, private router: Router, ){}

  ngOnInit(): void {
    this.getListaUsuario();
    this.criaForm(new Usuario);
    this.criaLocalStorage(false);
  }

  criaForm( usuario: Usuario){
    this.formUsuario = new FormGroup({
      email: new FormControl(usuario.email, [Validators.required, Validators.minLength(4)]),
      senha: new FormControl(usuario.senha, Validators.required)
    })
  }

  get email(){
    return this.formUsuario.get('email')!;
  }

  get senha(){
    return this.formUsuario.get('senha')!;
  }

  criaLocalStorage(valorBoolean: boolean){
    localStorage.setItem('conectado', `${valorBoolean}`)
  }

  getListaUsuario(){
    this.usuarioService.getUsuarios().subscribe((usuarios)=>{
      this.listaUsuarios = usuarios;
    })
  }

    validaUsuario(){
    this.listaUsuarios.find((usuario)=>{
      if(usuario.email === this.email.value){
        this.usuario = usuario;

      }

    })

    if(this.usuario.senha == this.senha.value){

      return true;
    }
    return false;
  }

  senhaCorreta(){
    console.log(this.usuario);

    if(this.usuario.senha === this.senha.value){
      return true;
    }
    return false;
  }

  onSubmit(){

      if(this.validaUsuario()){


        this.criaLocalStorage(true);
        this.router.navigate(['/'])
      }else{
        this.criaLocalStorage(false);
      }

  }
 ngOnDestroy(){

}
}
