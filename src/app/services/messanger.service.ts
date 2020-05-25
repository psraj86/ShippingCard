import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class MessangerService {
  subject = new Subject<Product>();
  constructor() {}

  sendMsg(product) {
    this.subject.next(product);
  }

  getMsg() {
    return this.subject.asObservable();
  }
}
