import {NavigationComponent} from './components/navigation/navigation.component';
import {ProjectsComponent} from "./components/projects/projects.component";
import {TableComponent} from './components/about/table/table.component';
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {FooterComponent} from "./components/contact/footer.component";
import {PortfolioRoutingModule} from "./portfolio-routing.module";
import {AboutComponent} from "./components/about/about.component";
import {HomeComponent} from "./components/home/home.component";
import {MeComponent} from './components/about/me/me.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {ContactService} from "./services/contact.service";
import {MatButtonModule} from '@angular/material/button';
import {PortfolioComponent} from "./portfolio.component";
import {ScrollService} from "./services/scroll.service";
import {MatTableModule} from "@angular/material/table";
import {ThemeService} from "./services/theme.service";
import {HttpClientModule} from "@angular/common/http";
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from "@angular/material/card";
import {TranslateModule} from "@ngx-translate/core";
import {MatRipple} from "@angular/material/core";
import {RouterModule} from "@angular/router";
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

@NgModule({
  declarations: [
    NavigationComponent,
    PortfolioComponent,
    ProjectsComponent,
    FooterComponent,
    TableComponent,
    AboutComponent,
    HomeComponent,
    MeComponent,
  ],
  exports: [
    PortfolioComponent,
  ],
  imports: [
    PortfolioRoutingModule,
    MatSidenavModule,
    HttpClientModule,
    MatToolbarModule,
    TranslateModule,
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
  ],
  providers: [
    ContactService,
    ScrollService,
    ThemeService,
  ],
})
export class PortfolioModule {
}
