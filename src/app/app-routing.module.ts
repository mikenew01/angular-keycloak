import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppAuthGuard} from './auth/services/app.authguard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
   path: 'users',
   loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AppAuthGuard]
})
export class AppRoutingModule { }
