import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usuario'
})
export class UsuarioPipe implements PipeTransform {

  transform(value: string): string {
    if(value){
      const resp = value.split('@');
      return resp[0];
    }
    return value;
  }

}
