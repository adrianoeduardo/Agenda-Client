import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPorNome'
})
export class filtroPorNome implements PipeTransform {

  transform(contatos, digitado) {
    digitado = digitado.toLowerCase()
    return contatos.filter( contato => contato.nome.toLowerCase().includes(digitado))
  }

}
