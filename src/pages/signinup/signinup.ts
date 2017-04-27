import { Component } from '@angular/core';
import { LoadingController, NavController } from 'ionic-angular';
import { Auth } from '../../providers/auth';
import { TabsPage } from '../tabs/tabs';

@Component({
  templateUrl: 'signinup.html'
})
export class SignInUpPage {
  constructor(public navCtrl: NavController, public authService: Auth, public loadingCtrl: LoadingController) {

  }

  signInUp() {
    console.info('signInUp');
    this.navCtrl.setRoot(TabsPage);
  }
}
