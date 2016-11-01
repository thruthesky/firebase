import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
//import * as firebase from 'firebase';
import { Login } from  '../pages/login/login';
import { CategoryTest } from '../fireframe/test/category-test';
import { PostTest } from '../fireframe/test/post-test';


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = Login;


  constructor(platform: Platform) {



    //let category = new Category();
    new CategoryTest().test(
      () => {
        console.log("CategoryTest End");
        new PostTest().test(
          () => {
            console.log('PostTest End');
          }
        )
      }
    );



/*
    new Category().ref.remove( e => {
      if ( e ) console.log('error', e);
    });
    */

//   category.gets( x => console.log(x) );
  

  }
}
