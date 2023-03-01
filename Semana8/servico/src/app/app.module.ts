import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsumindoServicoComponent } from 'src/components/consumindo-servico/consumindo-servico.component';
import { FuncionarioServerJsonComponent } from 'src/components/funcionario-server-json/funcionario-server-json.component';
import { SerieComponent } from 'src/components/serie/serie.component';
import { ListaEpisodiosComponent } from 'src/components/lista-episodios/lista-episodios.component';


@NgModule({
  declarations: [
    AppComponent,
    ConsumindoServicoComponent,
    FuncionarioServerJsonComponent,
    SerieComponent,
    ListaEpisodiosComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
