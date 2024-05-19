import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {PortfolioModule} from "./features/portfolio/portfolio.module";
import {LanguageService} from "./core/services/language.service";
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgModule} from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserModule,
    PortfolioModule,
  ],
  providers: [
    provideAnimationsAsync(),
    // LanguageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
