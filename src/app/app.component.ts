import { Component, ViewChild, NgZone } from '@angular/core';
import { Nav, Platform, AlertController} from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

import {Groceries} from '../pages/groceries/groceries';
import {Settings} from '../pages/settings/settings';
import { LoginPage } from '../pages/auth/login/login';


import firebase from 'firebase';


@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // VARIABLES
  rootPage: any = Settings;
  zone: any
  pages: Array<{title: string, component: any}>;
  fireAuth: any;

  // END OF VARIABLES

  constructor(public platform: Platform, private af: AngularFire, public ac: AlertController) {
    this.zone = new NgZone({});
    this.initializeApp();
    this.af.auth.subscribe( user => {
      if (user){
        this.fireAuth = user.auth.displayName
        console.log(this.fireAuth)
      }
    });



    // used for an example of ngFor and navigation
    this.pages = [
      // { title: 'Groceries', component: Groceries },
      { title: 'Settings', component: Settings },
      // {  title: 'Login', component: LoginPage }
    ];
  }



  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  logout(){
    this.af.auth.logout();
    this.nav.push(Settings)
  }
  login(){
    this.nav.setRoot(LoginPage)
  }

  groceries(){
    this.nav.setRoot(Groceries);
  }
}
