import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServerStatusService } from '../../api/server-status.service';
import { AuthService } from '../../api/auth/auth.service';

@Component({
  selector: 'page-home',
  templateUrl: './camera.html'
})
export class CameraPage {
  api_version: string = '';
  accessToken: string = '';

  constructor(public navCtrl: NavController,
              private serverStatusService: ServerStatusService,
              private authService: AuthService) {
    this.serverStatusService.get().then(res => {
      this.api_version = res.version;
      this.accessToken = authService.accessToken;
    }, console.error);
  }

}
