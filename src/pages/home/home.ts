import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Login } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor( private navCtrl: NavController ) {
    
  }

onClickLogout(){
  this.navCtrl.setRoot( Login );
}

}
