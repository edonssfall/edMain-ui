import {environment} from "../../../../environments/environment";
import {ThemeService} from "../../services/theme.service";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {Component} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
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

  protected readonly environment = environment;
}
