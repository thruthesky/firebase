import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import * as firebase from 'firebase';
import { Login } from  '../pages/login/login';


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = Login;

  constructor(platform: Platform) {
    var config = {
      apiKey: "AIzaSyCKikQsDJQwKH-95TYi9T4x4eBAc4teQrA",
      authDomain: "ionicfirebase3.firebaseapp.com",
      databaseURL: "https://ionicfirebase3.firebaseio.com",
      storageBucket: "ionicfirebase3.appspot.com",
      messagingSenderId: "309757644940"
    };
    firebase.initializeApp(config);

    // firebase.auth().onAuthStateChanged((user)=>{
    //   if(!user)this.rootPage = Login
    //   else this.rootPage = HomePage
    // })
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
