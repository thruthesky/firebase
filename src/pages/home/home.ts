import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { NavController } from 'ionic-angular';
import { Login } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  auth:any;
  constructor( private navCtrl: NavController ) {
    this.auth = firebase.auth();
  }

onClickLogout(){
  this.auth.signOut();
  this.navCtrl.setRoot( Login );
}

}
