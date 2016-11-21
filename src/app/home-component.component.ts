import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-component',
  template: `
    <h1>
      Home Component!
    </h1>
    {{param}}
  `,
  styles: []
})
export class HomeComponent implements OnDestroy {
  private subscription: Subscription;
  param: string;

  constructor(private route: ActivatedRoute) { 
    this.subscription = route.queryParams.subscribe(
      (queryParam: any) => this.param = queryParam['analytics']
    );

    this.subscription = route.fragment.subscribe(
      fragment => console.log(fragment)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
