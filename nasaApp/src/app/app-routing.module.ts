import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AuthGuard } from './auth/guard-for-auth/auth.guard';
import { AccesForAuthGuard } from './auth/guard-for-auth/acces-for-auth.guard';


const routes: Routes = [
  {
    path: '',
    component: AppComponent, canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    component: AuthComponent, canActivate: [AccesForAuthGuard]
  },
  {
    path: 'main',
    component: MainPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
