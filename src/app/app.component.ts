import { Component, ViewChild } from '@angular/core';
import { MenuController, NavController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Install Firebase SDK
// $npm install --save firebase
import firebase from 'firebase';

import { TabsPage } from "../pages/tabs/tabs";
import { SigninPage } from "../pages/signin/signin";
import { SignupPage } from "../pages/signup/signup";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  tabsPage:any = TabsPage;
  signinPage:any = SigninPage;
  signupPage:any = SignupPage;
  @ViewChild('nav') nav: NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCtrl: MenuController) {
    firebase.initializeApp({
      apiKey: "AIzaSyDUy_9c7jGJkI7ZmgO4y49Q7ljzEqdvbB8",
      authDomain: "ionic-recipebook-d6a0c.firebaseapp.com"
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onLoad(page: any) {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

  onLogout() {

  }

}

