import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { Get } from './get.model';
@Injectable({ providedIn: 'root' })
export class GetsService {
  private gets: Get[] = [];
  private getsUpdated = new Subject<Get[]>();

  constructor(private http: HttpClient) { }

  getGets() {
    this.http.get<{ message: string, gets: Get[] }>('http://localhost:3001/api/gets')
      .subscribe((getData) => {
        this.gets = getData.gets;
        this.getsUpdated.next([...this.gets]);

      });
  }
  getGetUpdateListener() {
    return this.getsUpdated.asObservable();
  }

  addGet(city: string, state: string, departure: string, arrival: string) {
    const gets: Get = {
      id: null,
      city: city,
      state: state,
      departure: departure,
      arrival: arrival
    };
    this.gets.push(gets);
  }
}
