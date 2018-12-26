import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginModule } from './modules/login';

import { PageNotFoundComponent } from './modules/core';
import { LoginComponent, AuthGuard } from './modules/login';
import { ResolverService } from './modules/login/resolver.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    resolve: {
<<<<<<< HEAD
      groups: ResolverService,
=======
      groups: ResolverService
>>>>>>> 5ba5b19c2fc214f98972e56b2a87d03987a362e5
    }
  },
  {
    path: 'register',
    loadChildren: './pages/register/register.module#RegisterModule',
<<<<<<< HEAD
=======
  },
  {
    path: 'admin',
    loadChildren: './pages/admin/admin.module#AdminModule',
    resolve: {
      groups: ResolverService
    }
>>>>>>> 5ba5b19c2fc214f98972e56b2a87d03987a362e5
  },
  {
    path: '',
    loadChildren: './pages/home/home.module#HomeModule',
    canLoad: [AuthGuard]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LoginModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
