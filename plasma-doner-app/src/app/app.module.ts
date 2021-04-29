import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponent } from './headers/headers.component';
import { ListDonerComponent } from './list-doner/list-doner.component';
import { CreateDonerComponent } from './create-doner/create-doner.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule,NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    ListDonerComponent,
    CreateDonerComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule,
    NgbDatepickerModule,
    HttpClientModule
  ],
  exports: [CreateDonerComponent],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
