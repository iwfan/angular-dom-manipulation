import { Component } from '@angular/core';

@Component({
  selector: 'app-get-dom-elements-with-trv',
  template: `
    <input #username type="text" name="username">
    <button (click)="getUsername(username)">Click</button>
  `,
})
export class GetDomElementsWithTrvComponent {

  getUsername(username: HTMLInputElement) {
    console.log(username);
  }
}
