import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operadora',
  templateUrl: './operadora.component.html',
  styleUrls: ['./operadora.component.css']
})
export class OperadoraComponent implements OnInit {
  public operadoras: any = [ 
    {op:'Claro'},
    {op:'Nextel'},
    {op:'Oi'},
    {op:'Tim'},
    {op:'Vivo'}    
  ]
  constructor() { }

  ngOnInit() {
  }

}
// tipar any 