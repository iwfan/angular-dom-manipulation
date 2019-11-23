import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { ViewchildBasicUsageComponent } from './demo/viewchild-basic-usage/viewchild-basic-usage.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DemoComponent,
  },
  {
    path: 'viewchild-basic-usage',
    pathMatch: 'full',
    component: ViewchildBasicUsageComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}