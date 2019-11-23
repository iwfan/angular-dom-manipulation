import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DemoComponent } from './demo/demo.component';
import { ViewchildBasicUsageComponent } from './demo/viewchild-basic-usage/viewchild-basic-usage.component';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    DemoComponent,
    ViewchildBasicUsageComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
