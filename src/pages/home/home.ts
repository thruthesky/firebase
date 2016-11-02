import { Component } from '@angular/core';
//import * as firebase from 'firebase';
import { NavController } from 'ionic-angular';
import { CategoryPage } from '../category/category';
 import { CategoryTest } from '../../fireframe/test/category-test';
import { PostTest } from '../../fireframe/test/post-test';
import { CategoryTestByRandy } from '../../fireframe/test/category-test-by-randy';
import { CategoryRandyTest } from '../../fireframe/test/randy/category-test';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  auth:any;
  constructor( private navCtrl: NavController ) {
    navCtrl.push( CategoryPage );

    this.onClickTest();

/*
    new CategoryTest().test(
      () => {
        console.log("CategoryTest End");
        new PostTest().test(
          () => {
            console.log('PostTest End');
          }
        )
      }
    )
    */


//    new CategoryTestByRandy().test( () => new CategoryTest().test( () => new PostTest().test( () => console.log('End')) ) );

  }


  onClickTest() {
    new CategoryRandyTest().test( () => {
      new CategoryTestByRandy().test( () => new CategoryTest().test( () => new PostTest().test( () => console.log('End')) ) );
    });
  }


}
