import { Injectable } from '@angular/core';
import { engLang } from './gLJson';

if (localStorage.lang == undefined) {
  // Default Language And Direction Of Application Setting
  localStorage.lang = JSON.stringify(engLang);
  localStorage.direction = "ltr";
  localStorage.home = 5;
  localStorage.theme = 'default';
  localStorage.mode = 'false';
  localStorage.card = 1;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public appTheme = localStorage.theme;
  public darkMode = localStorage.mode;
  public homePage = localStorage.home;
  public language = JSON.parse(localStorage.lang);
  public direction = localStorage.direction;
  public card = localStorage.card;

  constructor() { }

  getCurrentHomePage() {
    if (this.homePage == 1)
      return "tabs/home" + this.homePage;
    else
      return "tabs/home" + this.homePage;
  }
}
