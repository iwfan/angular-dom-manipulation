import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child-basic-usage',
  template: `
    <span #el>
      view-child-basic-usage works!
    </span>
  `,
  styles: []
})
export class ViewChildBasicUsageComponent implements AfterViewInit {

  @ViewChild('el', {static: true}) el: ElementRef;

  ngAfterViewInit(): void {
    console.log(this.el.nativeElement);
  }

}
