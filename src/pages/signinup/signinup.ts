import { ServerStatusService } from './../../api/server-status.service';
import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, NavController } from 'ionic-angular';
import { AuthService } from '../../api/auth/auth.service';
import { FormGroup } from '@angular/forms';
import { TabsPage } from '../tabs/tabs';

@Component({
  templateUrl: 'signinup.html'
})
export class SignInUpPage implements OnInit {
  signInUpForm: FormGroup;
  api_version: string;
  user: { email: string, password: string } = {} as any;
  content: string;
  api_base: string;

  constructor(public navCtrl: NavController, private serverStatusService: ServerStatusService,
              public authService: AuthService, public loadingCtrl: LoadingController,
              private alertCtrl: AlertController) {
    this.serverStatusService.get().subscribe(
      res => this.api_version = res && res.version ? res.version : '[API offline]',
      this.apiOffline.bind(this)
    );
    this.api_base = this.authService.api_base;
  }

  ngOnInit() {
    this.authService.accessToken && this.navCtrl.setRoot(TabsPage);
  }

  apiOffline(content) {
    const alert = this.alertCtrl.create({
      title: 'API Offline',
      subTitle: `Connect then retry. Exact error: ${content}`,
      buttons: ['Dismiss']
    });
    this.content = content;
    alert.present();
  }

  signInUp() {
    this.authService.create_user(this.user).subscribe(
      user => this.navCtrl.setRoot(TabsPage),
      err => {
        if (err.body !== `400 - E_VALIDATION: insert into "user_tbl" ("createdAt", "email", "password", "updatedAt") values ($1, $2, $3, $4) returning * - duplicate key value violates unique constraint "user_tbl_pkey"`)
          console.error(err);
        else
          this.authService.post(this.user).subscribe(resolve =>
            this.navCtrl.setRoot(TabsPage), console.error
          );
      }
    );
  }
}
