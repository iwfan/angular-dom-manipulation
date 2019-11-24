import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { ViewChildBasicUsageComponent } from './demo/view-child-basic-usage/view-child-basic-usage.component';
import { GetDomElementsWithDiComponent, HighLightDirective } from './demo/get-dom-elements-with-di/get-dom-elements-with-di.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    ViewChildBasicUsageComponent,
    GetDomElementsWithDiComponent,
    HighLightDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
