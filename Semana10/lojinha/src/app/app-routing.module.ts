import { ListComponent } from './pages/products/list/list.component';
import { LoginComponent } from './pages/login/login.component';
import { FullComponent } from './layouts/full/full.component';
import { ContentComponent } from './layouts/content/content.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children:[
      {path: '',
      redirectTo: 'login',
      pathMatch: 'full'
      },
      {
        path: 'login',
        component:LoginComponent

      }
    ]
  },
  {
    path: 'home',
    component: FullComponent,
    children: [
      {
        path: '',
        component: ListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
