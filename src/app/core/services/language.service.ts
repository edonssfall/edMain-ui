import {environment} from "../../environments/environment";
import {Language} from "../interfaces/language.interface";
import {TranslateService} from "@ngx-translate/core";
import {Injectable, OnInit} from "@angular/core";

@Injectable()
export class LanguageService implements OnInit {
  localName = environment.localStorage.language;
  languages: Language[] = [
    {name: 'English', code: 'en'},
    {name: 'Deutsch', code: 'de'}
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

  changeLanguage(language: Language = this.currentLanguage) {
    localStorage.setItem(this.localName, JSON.stringify(language));
    this.translate.use(language.code);
    this.currentLanguage = <Language>this.languages.find(lang => lang.code === language.code)
  }
}
