import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItemListComponent} from './item-list/item-list.component';
import {AppAuthGuard} from '../auth/services/app.authguard';
import {ItemCreateComponent} from './item-create/item-create.component';
import {ItemDeleteComponent} from './item-delete/item-delete.component';
import {ItemUpdateComponent} from './item-update/item-update.component';


const routes: Routes = [
  {
    path: '',
    component: ItemListComponent,
    canActivate: [AppAuthGuard],
    data: {roles: ['list']}
  },
  {
    path: 'create',
    component: ItemCreateComponent,
    canActivate: [AppAuthGuard],
    data: {roles: ['create']}
  },
  {
    path: 'delete/:id',
    component: ItemDeleteComponent,
    canActivate: [AppAuthGuard],
    data: {roles: ['delete']}
  },
  {
    path: 'update/:id',
    component: ItemUpdateComponent,
    canActivate: [AppAuthGuard],
    data: {roles: ['update']}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
