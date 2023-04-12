import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CodeBasedIconsModule } from 'projects/code-based-icons/src/public-api';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, CodeBasedIconsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
