import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const retornaValidacaoLocalStorage = JSON.parse(localStorage.getItem('conectado') as string);

    if(!retornaValidacaoLocalStorage){
      this.router.navigate(['/login'])
    }
    return retornaValidacaoLocalStorage;
  }

}
