import {PortfolioModule} from "./features/portfolio/portfolio.module";
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const portfolioModule = () => PortfolioModule;

const routes: Routes = [
  {path: '', loadChildren: portfolioModule},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
