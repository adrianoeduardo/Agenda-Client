import { Component, OnInit} from '@angular/core';
import { ContatoComponent} from '../contato/contato.component';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ContatoService } from '../contato/contato.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  contato: ContatoComponent = new ContatoComponent()
  meuForm: FormGroup
  servico: ContatoService
  msg: string = ""
  route: ActivatedRoute
  constructor(servico: ContatoService, route: ActivatedRoute, fb: FormBuilder) { 
      
      this.servico = servico
      this.route = route
      this.route.params.subscribe(params => {
        let id = params['id']
        if(id){
          this.servico.buscarContato(id)
          .subscribe(res => {
            this.contato = res.json()[0]
          })
        }
        
      })
      this.meuForm = fb.group({
        nome: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(20)])],
        telefone: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(14)])]
    });
  }  
  cadastrar (event){
    
    event.preventDefault()  
  
    this.servico.cadastrarContato(this.contato)
    .subscribe( (response) => {
      this.msg = response._body
      this.meuForm.reset()
    }, erro => console.log(erro))
  }
  

  ngOnInit() {
  }

}
