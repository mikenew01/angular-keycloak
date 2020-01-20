import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NotificationService} from '../../core/services/notification.service';
import {Location} from '@angular/common';
import {Item} from '../models/item.model';

@Component({
  selector: 'key-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.scss']
})
export class ItemCreateComponent implements OnInit {

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
    })
  }

  public hasError(controlName: string, errorName: string): any {
    return this.basicForm.controls[controlName].hasError(errorName);
  }

  public onCancel(): void {
    this.location.back();
  }

  public create(item: Item): void {
    this.notificationService.success (`Item, ${item.name}, criado com sucesso`);
    this.location.back();
  }

}
