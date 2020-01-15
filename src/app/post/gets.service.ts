import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Get } from './get.model';
@Injectable({ providedIn: 'root' })
export class GetsService {
  private gets: Get[] = [];
  private getsUpdated = new Subject<Get[]>();

  getGets() {
    return [...this.gets];
  }
  getGetUpdateListener() {
    return this.getsUpdated.asObservable();
  }

  addGet(city: string, state: string, departure: string, arrival: string) {
    const gets: Get = {
      city: city,
      state: state,
      departure: departure,
      arrival: arrival
    };
    this.gets.push(gets);
  }
}
