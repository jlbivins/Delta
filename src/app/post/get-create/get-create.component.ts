import { Component, EventEmitter, Output } from '@angular/core';

import { Get } from '../get.model';


@Component({
  selector: 'app-get-create',
  templateUrl: './get-create.component.html',
  styleUrls: ['./get-create.component.css']
})
export class GetCreateComponent {
  enteredCity = '';
  enteredState = '';
  departureTime = '';
  arrivalTime = '';
  @Output() getCreated = new EventEmitter<Get>();


  onAddPost() {
    const get: Get = {
      city: this.enteredCity,
      state: this.enteredState,
      departure: this.departureTime,
      arrival: this.arrivalTime
    };
    this.getCreated.emit(get);
  }
}
