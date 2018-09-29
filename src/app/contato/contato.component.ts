import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  id: number;
  @Input() nome: string;
  @Input() telefone: string;
  @Input() tipo: string;
  @Input() operadora: string;


  constructor() { }

  ngOnInit() {
  }

}
