import {environment} from "../../../../../environments/environment";
import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  showNotification = false;
  notificationMessage = '';

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      this.notificationMessage = 'Phone number copied to clipboard!';
      this.showNotification = true;
      setTimeout(() => this.showNotification = false, 3000);
    }, () => {
      this.notificationMessage = 'Failed to copy phone number!';
      this.showNotification = true;
      setTimeout(() => this.showNotification = false, 3000);
    });
  }

  protected readonly environment = environment;
}
