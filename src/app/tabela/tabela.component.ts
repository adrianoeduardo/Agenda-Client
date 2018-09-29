import { Component, OnInit } from '@angular/core';
import {ContatoComponent} from '../contato/contato.component'
import { ContatoService } from '../contato/contato.service'


@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {
  contatos: ContatoComponent[] = []
  servico: ContatoService
  msg:string = ""
  constructor(servico: ContatoService ) { 
    
    this.servico = servico
    this.servico.listarContatos().subscribe(res => {
      this.contatos = res.json()
    })
  }
  remover(contato) {
    this.servico.removerContato(contato)
    .subscribe((response)=> {
      this.msg = response._body
      let novaLista = this.contatos.slice(0)
      let i = novaLista.indexOf(contato)
      novaLista.splice(i, 1)
      this.contatos = novaLista
    }, 
  erro  => {
    this.msg = "Não foi possível excluir "+ erro
  })
}

  ngOnInit() {
  }

}
