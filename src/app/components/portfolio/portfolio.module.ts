import {ProjectsComponent} from "./projects/projects.component";
import {ContactComponent} from "./contact/contact.component";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {PortfolioRoutingModule} from "./portfolio-routing.module";
import {MatButtonModule} from '@angular/material/button';
import {PortfolioComponent} from "./portfolio.component";
import {AboutComponent} from "./about/about.component";
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {HomeComponent} from "./home/home.component";
import {RouterModule} from "@angular/router";
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

@NgModule({
    declarations: [
        PortfolioComponent,
    ],
    exports: [
        PortfolioComponent,
    ],
    imports: [
        PortfolioRoutingModule,
        ProjectsComponent,
        ContactComponent,
        MatSidenavModule,
        MatToolbarModule,
        MatButtonModule,
        AboutComponent,
        MatIconModule,
        HomeComponent,
        MatMenuModule,
        MatListModule,
        RouterModule,
        CommonModule,
    ]
})
export class PortfolioModule {
}
