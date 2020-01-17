import { Component, EventEmitter, Output } from '@angular/core';

import { Get } from '../get.model';


@Component({
  selector: 'app-get-create',
  templateUrl: './get-create.component.html',
  styleUrls: ['./get-create.component.css']
})
export class GetCreateComponent {
  dbid = '';
  enteredCity = '';
  enteredState = '';
  departureTime = '';
  arrivalTime = '';
  @Output() getCreated = new EventEmitter<Get>();

  //constructor(public getsService: GetsService)


  onAddPost() {
    const get: Get = {
      id: this.dbid,
      city: this.enteredCity,
      state: this.enteredState,
      departure: this.departureTime,
      arrival: this.arrivalTime
    };
    this.getCreated.emit(get);
  }
}
