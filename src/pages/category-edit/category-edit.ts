import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Category, categoryData } from '../../fireframe/category';
/*
  Generated class for the CategoryEdit page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-category-edit',
  templateUrl: 'category-edit.html'
})
export class CategoryEditPage {

  c = categoryData;
  category: Category = new Category();
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello CategoryEditPage Page');
  }


  onClickSubmit() {
    console.log( this.c );

    this.category.sets( this.c ).create( s => {
      this.navCtrl.pop();
    }, e => {
      alert('Error: ' + e );
    } );
  }
}
