import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SomeButtonComponent } from './some-button/some-button.component';
import {MatButtonModule} from '@angular/material/button';
import { SenderDataComponentComponent } from './sender-data-component/sender-data-component.component';
import { Receiver1stComponent } from './receiver1st/receiver1st.component';
import { Receiver2ndComponent } from './receiver2nd/receiver2nd.component';

@NgModule({
  declarations: [
    AppComponent,
    SomeButtonComponent,
    SenderDataComponentComponent,
    Receiver1stComponent,
    Receiver2ndComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
