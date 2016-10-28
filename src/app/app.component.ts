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
    apiKey: "AIzaSyC2rp0jey5iFDbgSDi5mNw4ujCA68FG7TY",
    authDomain: "fireframe-650a8.firebaseapp.com",
    databaseURL: "https://fireframe-650a8.firebaseio.com",
    storageBucket: "fireframe-650a8.appspot.com",
    messagingSenderId: "1076014174759"
    };
    firebase.initializeApp(config);
    let db = firebase.database();
    let ref = db.ref("/");



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
