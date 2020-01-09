import { Component, Input } from '@angular/core';

import { Get } from '../get.model';

@Component({
  selector: 'app-get-list',
  templateUrl: './get-list.component.html',
  styleUrls: ['./get-list.component.css']
})
export class GetListComponent {

  @Input() gets: Get[] = [];

}
