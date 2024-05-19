import {environment} from "../../../environments/environment";
import {ThemeInterface} from "../interfaces/theme.interface";
import {Injectable, OnInit} from '@angular/core';

@Injectable()
/**
 * ThemeService is used to change between different themes.
 */
export class ThemeService implements OnInit {
  storageName = environment.localStorage.theme;
  currentTheme: ThemeInterface = {isDark: false};

  /**
   * Sets the theme which is stored in the localstorage and if there is no theme
   * it will set the default theme in the localstorage
   */
  ngOnInit(): void {
    const savedTheme = localStorage.getItem(this.storageName);
    if (savedTheme) {
      this.changeTheme(JSON.parse(savedTheme));
    }
  }

  /**
   * Changes the theme and saves it into localstorage
   * @param theme the name of the theme
   */
  changeTheme(theme: boolean) {
    this.currentTheme = {isDark: theme};
    localStorage.setItem(this.storageName, theme.toString());
  }
}
