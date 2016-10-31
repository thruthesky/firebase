import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
//import * as firebase from 'firebase';
import { Login } from  '../pages/login/login';
import { Database } from '../fireframe/database';
import { Category } from '../fireframe/category';


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = Login;

  constructor(platform: Platform) {

    let db = new Database();
    db.connect();


    let category = new Category();


   //category.gets( 'id', x => console.log(x) );
   //category.gets( 'name', x => console.log(x) );

   category.ref.orderByChild('name')
    .once('child_added')
    .then( data => console.log('then:', data.val()));

  }
}
