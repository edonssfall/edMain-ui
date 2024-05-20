import {EducationComponent} from './components/about/education/education.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {ProjectsComponent} from "./components/projects/projects.component";
import {ContactComponent} from "./components/contact/contact.component";
import {WorkComponent} from './components/about/work/work.component';
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {PortfolioRoutingModule} from "./portfolio-routing.module";
import {AboutComponent} from "./components/about/about.component";
import {HomeComponent} from "./components/home/home.component";
import {MeComponent} from './components/about/me/me.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {PortfolioComponent} from "./portfolio.component";
import {MatTableModule} from "@angular/material/table";
import {ThemeService} from "./services/theme.service";
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from "@angular/material/card";
import {MatRipple} from "@angular/material/core";
import {RouterModule} from "@angular/router";
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

@NgModule({
  declarations: [
    NavigationComponent,
    EducationComponent,
    PortfolioComponent,
    ProjectsComponent,
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
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatListModule,
    RouterModule,
    CommonModule,
    MatGridList,
    MatGridTile,
    MatRipple,
    ContactComponent,
  ],
  providers: [
    ThemeService,
  ],
})
export class PortfolioModule {
}
