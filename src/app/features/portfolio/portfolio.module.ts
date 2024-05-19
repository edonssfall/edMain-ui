import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import { EducationComponent } from './components/about/education/education.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {ProjectsComponent} from "./components/projects/projects.component";
import {ContactComponent} from "./components/contact/contact.component";
import {WorkComponent} from './components/about/work/work.component';
import {PortfolioRoutingModule} from "./portfolio-routing.module";
import {AboutComponent} from "./components/about/about.component";
import {HomeComponent} from "./components/home/home.component";
import {MeComponent} from './components/about/me/me.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {PortfolioComponent} from "./portfolio.component";
import {ThemeService} from "./services/theme.service";
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatRipple} from "@angular/material/core";
import {RouterModule} from "@angular/router";
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

@NgModule({
  declarations: [
    NavigationComponent,
    EducationComponent,
    PortfolioComponent,
    AboutComponent,
    WorkComponent,
    HomeComponent,
    MeComponent,
  ],
  exports: [
    PortfolioComponent,
  ],
  imports: [
    PortfolioRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    CommonModule,
    ProjectsComponent,
    ContactComponent,
    MatRipple,
    MatTable,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatColumnDef,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRowDef,
    MatRowDef,
  ],
  providers: [
    ThemeService,
  ],
})
export class PortfolioModule {
}
