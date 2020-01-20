import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemCreateComponent } from './item-create/item-create.component';
import { ItemDeleteComponent } from './item-delete/item-delete.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemUpdateComponent } from './item-update/item-update.component';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatPaginatorModule,
  MatTableModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {FlexModule} from '@angular/flex-layout';
import {ItemsRoutingModule} from './items-routing.module';


@NgModule({
  declarations: [ItemCreateComponent, ItemDeleteComponent, ItemListComponent, ItemUpdateComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    FlexModule,
    ItemsRoutingModule
  ]
})
export class ItemsModule { }
