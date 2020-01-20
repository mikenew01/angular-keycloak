import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(
    private readonly snackBar: MatSnackBar,
    private readonly zone: NgZone
  ) {}

  default(message: string) {
    this.show(message, {
      duration: 2000,
      panelClass: 'blue-snackbar'
    });
  }

  info(message: string) {
    this.show(message, {
      duration: 2000,
      panelClass: 'blue-snackbar'
    });
  }

  success(message: string) {
    this.show(message, {
      duration: 2000,
      panelClass: 'green-snackbar'
    });
  }

  warn(message: string) {
    this.show(message, {
      duration: 2500,
      panelClass: 'yellow-snackbar'
    });
  }

  error(message: string) {
    this.show(message, {
      duration: 3000,
      panelClass: 'red-snackbar'
    });
  }

  private show(message: string, configuration: MatSnackBarConfig) {
    this.zone.run(() => this.snackBar.open(message, null, configuration));
  }
}
