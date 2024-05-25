import {environment} from "../../environments/environment";
import {Language} from "../interfaces/language.interface";
import {TranslateService} from "@ngx-translate/core";
import {Injectable, OnInit} from "@angular/core";

@Injectable()
export class LanguageService implements OnInit {
  localName = environment.localStorage.language;
  languages: Language[] = [
    {name: 'English', code: 'en'},
    {name: 'German', code: 'de'}
  ];
  currentLanguage: Language = this.languages[0];

  constructor(private translate: TranslateService) {
  }

  ngOnInit() {
    let savedLanguage = localStorage.getItem(this.localName);
    if (!savedLanguage) {
      this.changeLanguage();
    } else {
      this.currentLanguage = <Language>JSON.parse(savedLanguage);
      this.translate.setDefaultLang(this.currentLanguage.code);
      this.changeLanguage();
    }
  }

  changeLanguage(language: string = this.currentLanguage.code) {
    this.currentLanguage = <Language>this.languages.find(lang => lang.code === language)
    this.translate.use(this.currentLanguage.code);
    localStorage.setItem(this.localName, JSON.stringify(this.currentLanguage));
  }
}
