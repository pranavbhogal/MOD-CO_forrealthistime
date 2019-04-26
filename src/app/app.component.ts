import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoginPage} from './login/login.page';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Login',
      url: '/login',
      icon: 'login'
    },
    {
      title: 'Register',
      url: '/register',
      icon: 'register'
    },
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },

    {
      title: 'Search',
      url: '/search',
      icon: 'search'
    },
    {
      title: 'Bookmarks',
      url: '/bookmarks',
      icon: 'bookmark'
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: 'settings'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
