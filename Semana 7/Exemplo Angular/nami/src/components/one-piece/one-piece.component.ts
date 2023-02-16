import { Component } from '@angular/core';

@Component({
  selector: 'app-one-piece',
  templateUrl: './one-piece.component.html',
  styleUrls: ['./one-piece.component.scss']
})
export class OnePieceComponent {

  public nome : String = 'Nami';
  public count : number = 0;
  public disabled : boolean = true;
  public imgSource = 'https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q95/wp-content/uploads/2022/06/legiao_KeFlT_Cgb0os.jpg.webp'

  contar(){
    this.count += 1;
  }

  inverteBoleano(){
    this.disabled = !this.disabled;
  }

}
