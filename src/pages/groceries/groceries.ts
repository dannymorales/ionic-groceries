import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {AngularFire, FirebaseListObservable, AuthProviders, AuthMethods} from 'angularfire2'
import { NavController, AlertController } from 'ionic-angular';
import { LoginPage } from '../auth/login/login';
import * as firebase from 'firebase';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-groceries',
  templateUrl: 'groceries.html'
})
export class Groceries {


  constructor(public navCtrl: NavController, public ac: AlertController, private af: AngularFire) {

    this.af.auth.subscribe(auth => {
      if(!auth){
        this.navCtrl.setRoot(LoginPage);
        console.log('you are not logged in');

        }
      });
  }


  private groceries  = this.af.database.list('groceries', {
    query: {
      orderByChild: 'uid',
      equalTo: firebase.auth().currentUser.uid

    }
  })

  getItems(){
    return this.groceries
  }

  addItem():void{
    let prompt = this.ac.create({
      title: 'Item',
      message: 'enter the item to purchase',
      inputs:[
        {
          name: 'title',
          placeholder: 'Add Item',

        },
        {
          name: 'description',
          placeholder: 'add the description here'
        }
      ],
      buttons:[
        {
          text: "cancel",
          handler: data =>{
            console.log("cancelled");
          }
        },
        {
          text:"Add",
          handler: data =>{
            this.groceries.push({
              title: data.title,
              description: data.description,
              date: data.date = firebase.database.ServerValue.TIMESTAMP,
              uid: data.uid = firebase.auth().currentUser.uid,


            })
          }
        }
      ]
    })
    prompt.present();
  }
  // addItems(name:string, category:string, amount:number){
  //   this.groceries.push({name, category, amount});
  // }

  ngOnInit(){
    this.af.auth.subscribe(auth => {
      if(!auth){
        this.navCtrl.setRoot(LoginPage);
        console.log('you are not logged in');

        }
      });
  }
}
