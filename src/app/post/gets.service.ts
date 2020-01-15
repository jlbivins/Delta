import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Post } from './post.model';
@Injectable({ providedIn: 'root' })
export class GetsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Get[]>();

  getGets() {
    return [...this.posts];
  }
  getGetUpdateListener() {
    return this.getsUpdated.asObservable();
  }

  addGet(city: string, state: string) {
    const get: Get = { city: city, state: state };
    this.gets.push(get);
  }
}
