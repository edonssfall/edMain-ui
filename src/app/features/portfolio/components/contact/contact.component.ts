import {ThemeService} from "../../services/theme.service";
import {Component} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {ModalComponent} from "./modal/modal.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor(private iconRegistry: MatIconRegistry,
              private sanitizer: DomSanitizer,
              public themeService: ThemeService,
              public dialog: MatDialog) {
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

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ModalComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  protected readonly environment = environment;
}
