import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PeopleModule } from './people/people.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PeopleModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
