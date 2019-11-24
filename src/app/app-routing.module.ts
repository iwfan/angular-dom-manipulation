import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { ViewChildBasicUsageComponent } from './demo/view-child-basic-usage/view-child-basic-usage.component';
import { GetDomElementsWithDiComponent } from './demo/get-dom-elements-with-di/get-dom-elements-with-di.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DemoComponent,
  },
  {
    path: 'view-child-basic-usage',
    pathMatch: 'full',
    component: ViewChildBasicUsageComponent,
  },
  {
    path: 'get-host-elements-with-di',
    pathMatch: 'full',
    component: GetDomElementsWithDiComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
