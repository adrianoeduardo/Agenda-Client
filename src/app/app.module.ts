import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { RodapeComponent } from './rodape/rodape.component';
import { TabelaComponent } from './tabela/tabela.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ContatoComponent } from './contato/contato.component';
import { routing } from './app.routes';
import { filtroPorNome } from './tabela/tabela.pipe';
import { HttpModule } from '@angular/http';
import { TipoComponent } from './tipo/tipo.component';
import { OperadoraComponent } from './operadora/operadora.component';
import { ContatoService } from './contato/contato.service';


@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    RodapeComponent,
    TabelaComponent,
    CadastroComponent,
    ContatoComponent,
    filtroPorNome,
    TipoComponent,
    OperadoraComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [ContatoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
