import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from './user-list/user-list.component';
import {UserCreateComponent} from './user-create/user-create.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {UserDeleteComponent} from './user-delete/user-delete.component';
import {UserUpdateComponent} from './user-update/user-update.component';
import {AppAuthGuard} from '../auth/services/app.authguard';


const routes: Routes = [
  {
    path: '',
    component: UserListComponent,
    canActivate: [AppAuthGuard],
    data: {roles: ['user', 'admin']}
  },
  {
    path: 'create',
    component: UserCreateComponent,
    canActivate: [AppAuthGuard],
    data: {roles: ['admin']}
  },
  {
    path: 'detail/:id',
    component: UserDetailComponent,
    canActivate: [AppAuthGuard],
    data: {roles: ['user', 'admin']}
  },
  {
    path: 'delete/:id',
    component: UserDeleteComponent,
    canActivate: [AppAuthGuard],
    data: {roles: ['user', 'admin']}
  },
  {
    path: 'update/:id',
    component: UserUpdateComponent,
    canActivate: [AppAuthGuard],
    data: {roles: ['user', 'admin']}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
