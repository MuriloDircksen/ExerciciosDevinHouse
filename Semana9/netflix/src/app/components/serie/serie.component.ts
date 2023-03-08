import { SerieService } from 'src/app/service/serie.service';
import { ISerie } from 'src/app/models/serie';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.scss']
})
export class SerieComponent implements OnInit {

  serie!: ISerie;

  constructor(private serieService: SerieService, private route: ActivatedRoute){}

  ngOnInit(){
    this.route.params.subscribe((param)=>{
      this.getSerie(param['id']);
    })
  }

  async getSerie(id: string){
    this.serieService.getSerie(id).subscribe((serie) => {
      this.serie = serie;
    })
  }
}
