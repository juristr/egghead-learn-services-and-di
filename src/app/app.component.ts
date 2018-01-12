import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular Services</h1>

    <app-person-edit></app-person-edit>
  `
})
export class AppComponent {
  title = 'app';
}
