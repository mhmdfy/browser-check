import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'browser-check';

  constructor(private deviceService: DeviceDetectorService) {}

  ngOnInit() {
    console.log("Is browser supported?", this.supportedBrowser());
    if (this.supportedBrowser()) {
      window.location.href = 'https://meet.aramco.com/';
    }
  }

  supportedBrowser() : boolean {
    let ua = window.navigator.userAgent;
    console.log('user agent', ua);

    if (this.deviceService.isDesktop) {
      return (this.deviceService.browser == 'Chrome' || this.deviceService.browser == 'Firefox' || this.deviceService.browser == 'MS-Edge-Chromium')
    }

    // return ua.indexOf('Chrome') !== -1 || ua.indexOf('Firefox') !== -1;
    return false;
  }

}
