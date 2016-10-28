import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Login } from  '../pages/login/login';
import { Register } from '../pages/register/register';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Login,
    Register
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Login,
    Register
  ],
  providers: [  ]
})
export class AppModule {}
