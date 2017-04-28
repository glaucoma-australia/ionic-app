import { Component } from '@angular/core';

import { PatientInfoPage } from '../patient-info/patient-info';
import { ResultPage } from '../result/result';
import { CameraPage } from '../camera/camera';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = CameraPage;
  tab2Root = PatientInfoPage;
  tab3Root = ResultPage;

  constructor() {

  }
}
