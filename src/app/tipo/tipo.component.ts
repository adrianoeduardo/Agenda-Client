import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-tipo',
  templateUrl: './tipo.component.html',
  styleUrls: ['./tipo.component.css']
})
export class TipoComponent implements OnInit {
  public tipos:Object[] = [
    {t:'Celular'},
    {t:'Fixo'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
