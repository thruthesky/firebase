import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Category, categoryData } from '../../fireframe/category';
import { CategoryEditPage } from '../category-edit/category-edit';

/*
  Generated class for the Category page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class CategoryPage {

  c = categoryData;
  category: Category = new Category();
  data;
  keys;
  constructor(public navCtrl: NavController) {
  }

  displayCategory() {
    this.category.gets( re => {
      console.log(re);
      this.data = re;
      console.log( this.categories );
    });
  }

  get categories() {
    if ( this.data === void 0 ) return [];
    return Object.keys( this.data );
  }

  ionViewDidLoad() {
    // console.log('Hello CategoryPage Page');
  }
  ionViewWillEnter() {
    console.log('CategoryPage will enter');
    this.displayCategory();
  }

  onClickSubmit() {

  }

  onClickCreateCategory() {
    this.navCtrl.push( CategoryEditPage );
  }

  onClickDelete( key ) {
    console.log('delete: ' + key);
    this.category.delete( key, s => {
      if ( s ) alert('Error: ' + s);
      else {
        console.log('success: removing from content');
        this.data = {};
        this.displayCategory();
      }

    }, e => {
      alert('Error: ' + e);
    });

  }

}
