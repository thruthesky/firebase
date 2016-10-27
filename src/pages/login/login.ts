import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../providers/login-service';
import { HomePage } from '../home/home';
import { Register } from '../register/register';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [  ]
})
export class Login {
  public loginForm;
  emailChanged: boolean = false;
  passwordChanged: boolean = false;
  submitAttempt: boolean = false;
  loading: any;

  constructor(
    public nav: NavController, 
    private userSrvc: UserService, 
    private formBuilder: FormBuilder,
    private navCtrl: NavController 
    ) {
    this.loginForm = formBuilder.group( {
      email: [ '', Validators.compose ( [ Validators.required ] ) ],
      password: [ '', Validators.compose ( [ Validators.minLength ( 6 ), Validators.required ] ) ]
    });
  }
  


  onSubmit(){
    this.submitAttempt = true;
    if ( this.loginForm.valid )
        this.userSrvc.login( this.loginForm.value.email,this.loginForm.value.password ). then( userSrvc => {
          this.nav.setRoot( HomePage );
        }, error => {
            console.log( error )
        });
  }

  onClickRegister(){
    this.navCtrl.push( Register );
  }
}
