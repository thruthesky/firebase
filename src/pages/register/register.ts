import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { UserService } from '../../providers/login-service';

/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class Register {

  public registerForm: any;
  emailChanged: boolean;
  passwordChanged: boolean;
  submitAttempt: boolean;

  constructor(
    private navCtrl: NavController,
    private loginSrvc: UserService,
    private formBuilder: FormBuilder,
    private userSrvc: UserService
    ) {

      this. registerForm = formBuilder. group( {
      email: [ '', Validators.compose( [ Validators.required ] ) ],
      password: [ '', Validators.compose( [ Validators.minLength ( 6 ), Validators.required ] ) ]
    })

    }

  ionViewDidLoad() {
    console.log('Hello Register Page');
  }

  onSubmitRegister(){
    this.submitAttempt = true;
    if ( this.registerForm.valid ){   
      this.userSrvc.register( this.registerForm.value.email, this.registerForm.value.password ). then(() => {
      this.navCtrl.pop();
      }, err => {
        console.log( err )
      });
    } 
  }
}
