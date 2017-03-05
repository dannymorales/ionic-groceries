import { Component } from '@angular/core';
import {Platform, ActionSheetController} from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class Settings {



  constructor(public navCtrl: NavController, public navParams: NavParams, public aCtrl: ActionSheetController) {}

  presentActionsheet(){
    let actionsheet = this.aCtrl.create({
      title: 'modify',
      buttons: [

      ]
    })
  }
}
