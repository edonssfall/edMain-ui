import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {PortfolioModule} from "./components/portfolio/portfolio.module";
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgModule} from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserAnimationsModule,
        AppRoutingModule,
        BrowserModule,
        PortfolioModule,
    ],
    providers: [
    provideAnimationsAsync()
  ],
    bootstrap: [AppComponent]
})
export class AppModule {
}