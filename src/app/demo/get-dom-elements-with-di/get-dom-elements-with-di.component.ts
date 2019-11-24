import { AfterViewInit, Component, Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighLightDirective implements OnInit {
  constructor(
    private host: ElementRef,
  ) {}

  ngOnInit(): void {
    this.host.nativeElement.classList.add('highlight');
  }
}

@Component({
  selector: 'app-get-dom-elements-with-di',
  template: `
    <span appHighlight>
      get-dom-elements-with-di works!
    </span>
  `,
})
export class GetDomElementsWithDiComponent implements AfterViewInit {

  constructor(
    private host: ElementRef,
  ) { }

  ngAfterViewInit(): void {
    console.log(this.host.nativeElement);
  }

}
