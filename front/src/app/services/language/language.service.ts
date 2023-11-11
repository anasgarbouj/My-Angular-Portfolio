import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  language: "es" | "en";

  constructor(
    public translateService: TranslateService,
  ) {}

  initLanguage() {
    this.translateService.addLangs(["en", "es"]);
    let language = navigator.language || (navigator as any).userLanguage;
    language = "en"; // Setting the default language to English
    this.translateService.setDefaultLang(language);

    // Removed the this.location.go(language) line

    this.language = language;
  }

  changeLanguage(language: "es" | "en") {
    this.translateService.setDefaultLang(language);
    // Removed the this.location.go(language) line
    this.language = language;
  }
}
