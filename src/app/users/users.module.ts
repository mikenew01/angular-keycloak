import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';


@NgModule({
  declarations: [
    UserCreateComponent,
    UserListComponent,
    UserUpdateComponent,
    UserDetailComponent,
    UserDeleteComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  exports: [
    UserCreateComponent,
    UserDeleteComponent,
    UserUpdateComponent,
    UserDetailComponent,
    UserListComponent
  ]
})
export class UsersModule { }
