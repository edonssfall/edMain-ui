import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {PortfolioModule} from "./features/portfolio/portfolio.module";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {LanguageService} from "./core/services/language.service";
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {HttpClient} from "@angular/common/http";
import {AppComponent} from './app.component';
import {NgModule} from '@angular/core';

function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    AppRoutingModule,
    PortfolioModule,
    BrowserModule,
  ],
  providers: [
    provideAnimationsAsync(),
    LanguageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
