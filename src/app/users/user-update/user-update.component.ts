import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model';
import {Location} from '@angular/common';
import {NotificationService} from '../../core/services/notification.service';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'key-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {

  public basicForm: FormGroup;

  constructor(private activeRoute: ActivatedRoute,
              private location: Location,
              private fb: FormBuilder,
              private readonly notificationService: NotificationService) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.basicForm = this.fb.group({
      name:  new FormControl('', [Validators.max(50)]),
      email: new FormControl('', []),
      id: []
    });
  }

  public hasError(controlName: string, errorName: string): any{
    return this.basicForm.controls[controlName].hasError(errorName);
  }

  public onCancel(): void {
    this.location.back();
  }

  public update(user: User): void {
    let id: number = this.activeRoute.snapshot.params['id'];
    this.notificationService.success(`Usuário, ${id}, atualizado com sucesso.`);
    this.location.back();
  }

}
