import { Component, OnInit } from '@angular/core';
import { ISerie } from 'src/app/models/serie';
import { SerieService } from 'src/app/service/serie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  series!: ISerie[] ;

  constructor(private serieService: SerieService){
    this.listaSerie();


  }

  ngOnInit(): void {
    this.listaSerie();
    console.log(this.series);

  }



  listaSerie(){
    this.serieService.getSeries().subscribe((series)=>{
      this.series = series;
      console.log(this.series);


    });
  }

}
