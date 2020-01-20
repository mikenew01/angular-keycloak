import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {NotificationService} from '../../core/services/notification.service';
import {Item} from '../models/item.model';

@Component({
  selector: 'key-item-update',
  templateUrl: './item-update.component.html',
  styleUrls: ['./item-update.component.scss']
})
export class ItemUpdateComponent implements OnInit {

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
      id: []
    });
  }

  public hasError(controlName: string, errorName: string): any{
    return this.basicForm.controls[controlName].hasError(errorName);
  }

  public onCancel(): void {
    this.location.back();
  }

  public update(item: Item): void {
    let id: number = this.activeRoute.snapshot.params['id'];
    this.notificationService.success(`Item, ${id}, atualizado com sucesso.`);
    this.location.back();
  }

}
