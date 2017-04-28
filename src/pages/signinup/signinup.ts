import { Component } from '@angular/core';
import { LoadingController, NavController } from 'ionic-angular';
import { AuthService } from '../../api/auth/auth.service';
import { FormGroup } from '@angular/forms';
import { TabsPage } from '../tabs/tabs';

@Component({
  templateUrl: 'signinup.html'
})
export class SignInUpPage {
  signInUpForm: FormGroup;
  user: { email: string, password: string } = {} as any;

  constructor(public navCtrl: NavController, public authService: AuthService, public loadingCtrl: LoadingController) {

  }

  signInUp() {
    this.authService.create_user(this.user).subscribe(console.info, err => {
      if (err.body !== `400 - E_VALIDATION: insert into "user_tbl" ("createdAt", "email", "password", "updatedAt") values ($1, $2, $3, $4) returning * - duplicate key value violates unique constraint "user_tbl_pkey"`) {
        console.error(err)
      } else {
        this.authService.post(this.user).subscribe(resolve => {
          this.navCtrl.setRoot(TabsPage)
        }, console.error);
      }
    });
  }
}
