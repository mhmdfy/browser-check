import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DeviceDetectorModule } from 'ngx-device-detector';

import { AppComponent } from './app.component';
import { UnsupportedComponent } from './pages/unsupported/unsupported.component';

@NgModule({
  declarations: [
    AppComponent,
    UnsupportedComponent
  ],
  imports: [
    BrowserModule,
    DeviceDetectorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
