import {environment} from "../../../../environments/environment";
import {ContactService} from "../../services/contact.service";
import {ThemeService} from "../../services/theme.service";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {Component} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(private iconRegistry: MatIconRegistry,
              private sanitizer: DomSanitizer,
              public themeService: ThemeService,
              public contactService: ContactService) {
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
