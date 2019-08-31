import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// componentes
import { AuthComponent } from './component/auth/auth.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {
    path: 'login',
    component: AuthComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  // ruta 'comodín'
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
