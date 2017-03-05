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



  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, private af: AngularFire) {
    this.af.auth.subscribe( auth => {
      if(auth){
        this.navCtrl.setRoot(Groceries);
        console.log('you are logged in');
        console.log(firebase.auth().currentUser.uid)
      }
    });
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
