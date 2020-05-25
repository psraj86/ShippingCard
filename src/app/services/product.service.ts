import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productList: Product[] = [
    new Product('1', 'Test 1', 'This is the product 1 description', 200),
    new Product('2', 'Test 2', 'This is the product 2 description', 300),
    new Product('3', 'Test 3', 'This is the product 3 description', 150),
    new Product('4', 'Test 4', 'This is the product 4 description', 200),
    new Product('5', 'Test 5', 'This is the product 5 description', 230),
    new Product('6', 'Test 6', 'This is the product 6 description', 220),
  ];
  constructor() {}

  getProducts(): Product[] {
    // TODO: Populate products from the api.
    return this.productList;
  }
}
