import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-user-component',
  template: `
      <h1>User Component</h1>
      <a [routerLink]="['../']">Home</a>
      <a [routerLink]="['/user']">User</a>
    `
})
export class UserComponent {
}
