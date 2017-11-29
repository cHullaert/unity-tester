import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UnityLinkerModule } from 'ng-unity';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UnityLinkerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
