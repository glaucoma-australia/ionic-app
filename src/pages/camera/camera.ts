import { Component, OnInit } from '@angular/core';
import { Platform } from 'ionic-angular';
import { ServerStatusService } from '../../api/server-status.service';
import { AuthService } from '../../api/auth/auth.service';

@Component({
  selector: 'page-camera',
  templateUrl: './camera.html'
})
export class CameraPage implements OnInit {
  api_version: string = '';
  accessToken: string = '';
  cameraOpt: any;

  constructor(public plt: Platform,
              private serverStatusService: ServerStatusService,
              private authService: AuthService) {
    this.serverStatusService.get().subscribe(res => {
      this.api_version = res.version;
      this.accessToken = authService.accessToken;
    }, console.error);
  }

  ngOnInit() {
    if (this.plt.is('core') || this.plt.is('mobileweb')) {
      this.cameraOpt = 'web/mobileweb';
    } else {
      this.cameraOpt = 'mobile device';
    }
  }
}
