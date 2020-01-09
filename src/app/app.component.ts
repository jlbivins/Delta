import { Component } from '@angular/core';

import { Get } from './post/get.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storedGets: Get[] = [];

  onGetAdded(get) {
    this.storedGets.push(get);
  }
}
