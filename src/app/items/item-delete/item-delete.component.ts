import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {NotificationService} from '../../core/services/notification.service';
import {ActivatedRoute} from '@angular/router';
import {Item} from '../models/item.model';

@Component({
  selector: 'key-item-delete',
  templateUrl: './item-delete.component.html',
  styleUrls: ['./item-delete.component.scss']
})
export class ItemDeleteComponent implements OnInit {

  public item: Item;

  constructor(private location: Location,
              private readonly notificationService: NotificationService,
              private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
  }

  public delete() {
    let id: number = this.activeRoute.snapshot.params['id'];
    this.notificationService.success(`Item, ${id}, excluído com sucesso`);
    this.location.back();
  }

  public onCancel(): void {
    this.location.back();
  }
}
