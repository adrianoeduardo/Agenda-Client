import { Injectable } from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
import { ContatoComponent } from '../contato/contato.component'
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  http: Http
  headers: Headers
  url: string = "//localhost/agenda/Controllers/AgendaCtrl.php"

  constructor( http: Http) {
    this.http = http
    this.headers = new Headers()
    this.headers.append('Content-Type', 'application/json')
   }

   cadastrarContato (contato: ContatoComponent){
     if(contato.id){
      return this.http.put(this.url + "/" + contato.id, JSON.stringify(contato), {headers: this.headers})
     }else{
      return this.http.post(this.url, JSON.stringify(contato), {headers: this.headers})
     }
   
   }

   listarContatos () {
     return this.http.get(this.url)

   }
   removerContato(contato:ContatoComponent){
      return this.http.delete(this.url + "/" + contato.id)
   }
   
   buscarContato(id:number){
      return this.http.get(this.url + "/" + id)
   }

}
