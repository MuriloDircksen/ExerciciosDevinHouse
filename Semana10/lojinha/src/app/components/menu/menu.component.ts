import { Router } from '@angular/router';
import { Component } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(private router: Router){}

  logout(){

    localStorage.removeItem('userName');
    this.router.navigate(['/login'])
  }

}
