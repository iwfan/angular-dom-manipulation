import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-viewchild-basic-usage',
  template: `<span #span>I am the span element.</span>`
})
export class ViewchildBasicUsageComponent implements AfterViewInit {

  @ViewChild('span', { static: true}) el: ElementRef;

  ngAfterViewInit() {
    console.log(this.el.nativeElement);
  }

}