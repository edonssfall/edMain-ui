import {PortfolioModule} from "./components/portfolio/portfolio.module";
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const portfolioModule = () => import('./components/portfolio/portfolio.module').then(m => m.PortfolioModule);

export const routes: Routes = [
    {path: '', loadChildren: portfolioModule},
];
