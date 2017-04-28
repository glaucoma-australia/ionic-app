import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { PatientInfoPage } from '../pages/patient-info/patient-info';
import { ResultPage } from '../pages/result/result';
import { CameraPage } from '../pages/camera/camera';
import { TabsPage } from '../pages/tabs/tabs';
import { SignInUpPage } from '../pages/signinup/signinup';

import { HttpModule } from '@angular/http';
import { AuthService } from '../api/auth/auth.service';
import { ServerStatusService } from '../api/server-status.service';



@NgModule({
  declarations: [
    MyApp,
    SignInUpPage,
    PatientInfoPage,
    ResultPage,
    CameraPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SignInUpPage,
    PatientInfoPage,
    ResultPage,
    CameraPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    ServerStatusService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
