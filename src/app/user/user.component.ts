import { Component, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-user-component',
  template: `
      <h1>User Component</h1>
      <button (click)="onNavigate()">Go Home</button>
      <hr>
      {{id}}
    `
})
export class UserComponent implements OnDestroy {
  id: string;
  private subscription: Subscription;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { 
    //this.id = activatedRoute.snapshot.params['id'];
    this.subscription = activatedRoute.params.subscribe(
      (param: any) => this.id = param['id']
    );
  }

  onNavigate() {
    this.router.navigate(['/'], {queryParams: {analytics: 100}});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe(); 
  }
}
