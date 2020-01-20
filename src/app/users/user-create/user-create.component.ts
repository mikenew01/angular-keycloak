import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Location } from '@angular/common';
import {User} from '../models/user.model';
import {NotificationService} from '../../core/services/notification.service';

@Component({
  selector: 'key-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  public basicForm: FormGroup;

  constructor(private readonly notificationService: NotificationService,
              private location: Location,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.basicForm = this.fb.group({
      name:  new FormControl('', [Validators.required, Validators.max(50)]),
      email: new FormControl('', [Validators.required, Validators.email]),
    })
  }

  public hasError(controlName: string, errorName: string): any {
    return this.basicForm.controls[controlName].hasError(errorName);
  }

  public onCancel(): void {
    this.location.back();
  }

  public create(user: User): void {
    this.notificationService.success (`Usuário, ${user.name}, criado com sucesso`);
    this.location.back();
  }
}
