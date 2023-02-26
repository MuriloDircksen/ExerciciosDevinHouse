import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsumindoServicoComponent } from 'src/components/consumindo-servico/consumindo-servico.component';
import { FuncionarioServerJsonComponent } from 'src/components/funcionario-server-json/funcionario-server-json.component';


@NgModule({
  declarations: [
    AppComponent,
    ConsumindoServicoComponent,
    FuncionarioServerJsonComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
