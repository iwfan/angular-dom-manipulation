import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit {
  name = 'Angular';
  @ViewChild('test', {read: ElementRef, static: true}) el: ElementRef;

  ngAfterViewInit() {
    console.log(this.el.nativeElement);
  }
}
