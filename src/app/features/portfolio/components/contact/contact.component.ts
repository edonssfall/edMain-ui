import {ThemeService} from "../../services/theme.service";
import {Component} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  showNotification = false;
  notificationMessage = '';

  constructor(private iconRegistry: MatIconRegistry,
              private sanitizer: DomSanitizer,
              public themeService: ThemeService) {
    const assetsPath = 'assets/portfolio/icons/';
    iconRegistry.addSvgIcon(
      'github',
      sanitizer.bypassSecurityTrustResourceUrl(`${assetsPath}github.svg`)
    );
    iconRegistry.addSvgIcon(
      'linkedin',
      sanitizer.bypassSecurityTrustResourceUrl(`${assetsPath}linkedin.svg`)
    );
  }

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
