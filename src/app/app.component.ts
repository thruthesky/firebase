import { Component } from '@angular/core';
import { HomePage } from '../pages/home/home';
import * as firebase from 'firebase';
@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = HomePage;
  constructor() {
    var config = {
      apiKey: "AIzaSyCKGAejpeOxxSHELi_Xbo2UdRa8xQPmipU",
      authDomain: "test-ec3e3.firebaseapp.com",
      databaseURL: "https://test-ec3e3.firebaseio.com",
      storageBucket: "test-ec3e3.appspot.com",
      messagingSenderId: "55749236444"
    };

    firebase.initializeApp( config );
    /*
firebase
  .auth()
  .signInWithEmailAndPassword('abc@def.com', '123456')
  .then( authData => console.log( authData ), err => {
    console.log(err);
    alert( err.message );
  });
  */

  }
}
