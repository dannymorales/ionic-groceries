import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import {AngularFireModule} from 'angularfire2';
import { MyApp } from './app.component';
import { Groceries } from '../pages/groceries/groceries';
import { Settings } from '../pages/settings/settings';
import { LoginPage } from '../pages/auth/login/login';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Platform, ActionSheetController} from 'ionic-angular';
import firebase from 'firebase';

export const FireBaseConfig = {



}
@NgModule({
  declarations: [
    MyApp,
    Groceries,
    Settings,
    LoginPage,


  ],
  imports: [
    IonicModule.forRoot(MyApp),
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(FireBaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Groceries,
    Settings,
    LoginPage,

  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
