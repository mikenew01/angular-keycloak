import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import {NotificationService} from '../../core/services/notification.service';

@Component({
  selector: 'key-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss']
})
export class UserDeleteComponent implements OnInit {
  public user: User;

  constructor(private location: Location,
              private readonly notificationService: NotificationService,
              private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
  }

  public delete() {
    let id: number = this.activeRoute.snapshot.params['id'];
    this.notificationService.success(`Usuário, ${id}, excluído com sucesso`);
    this.location.back();
  }

  public onCancel(): void {
    this.location.back();
  }
}
