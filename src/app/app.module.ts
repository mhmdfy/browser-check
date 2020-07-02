import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DeviceDetectorModule } from 'ngx-device-detector';

import { AppComponent } from './app.component';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { FullIframeComponent } from './pages/full-iframe/full-iframe.component';

@NgModule({
  declarations: [
    AppComponent,
    SafeUrlPipe,
    FullIframeComponent
  ],
  imports: [
    BrowserModule,
    DeviceDetectorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
