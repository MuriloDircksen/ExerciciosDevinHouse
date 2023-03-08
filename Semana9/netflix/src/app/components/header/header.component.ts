import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router){}

  logout(){
    localStorage.setItem('conectado', 'false');
    this.router.navigate(['/login']);
  }
  navegarHome(){
    this.router.navigate(['/home']);
  }

}
