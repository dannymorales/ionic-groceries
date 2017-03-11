import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Groceries } from '../../groceries/groceries';
import * as firebase from 'firebase'


/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
state: string = '';
error: any;
email: any;
user = firebase.auth.FacebookAuthProvider.name

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, private af: AngularFire) {
    this.af.auth.subscribe( user => {
      if(user){
        this.navCtrl.setRoot(Groceries);
      }
    });
  }


  fb(){
      this.af.auth.login({
        provider: AuthProviders.Facebook,
        method: AuthMethods.Popup
      }).then((success) =>{
        console.log('you logged in with facebook');
        console.log(this.user)
        this.navCtrl.setRoot(Groceries);
      }).catch((err) => {
        this.error = err
      })
  }

  onSubmit(formData){
    if (formData.valid){
      this.af.auth.login({
        email: formData.value.email,
        password: formData.value.password
      },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password
      }).then((success) => {
        console.log('you are logged in');
        this.navCtrl.setRoot(Groceries);
      }).catch((err) => {
        this.error = err
      });
    }

  }






  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad LoginPage');
  // }

}
