import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from './user-list/user-list.component';
import {UserCreateComponent} from './user-create/user-create.component';
import {UserDeleteComponent} from './user-delete/user-delete.component';
import {UserUpdateComponent} from './user-update/user-update.component';
import {AppAuthGuard} from '../auth/services/app.authguard';


const routes: Routes = [
  {
    path: '',
    component: UserListComponent,
    canActivate: [AppAuthGuard],
    data: {roles: ['list']}
  },
  {
    path: 'create',
    component: UserCreateComponent,
    canActivate: [AppAuthGuard],
    data: {roles: ['create']}
  },
  {
    path: 'delete/:id',
    component: UserDeleteComponent,
    canActivate: [AppAuthGuard],
    data: {roles: ['delete']}
  },
  {
    path: 'update/:id',
    component: UserUpdateComponent,
    canActivate: [AppAuthGuard],
    data: {roles: ['update']}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
