import { Component, OnInit } from '@angular/core';
import { MessangerService } from 'src/app/services/messanger.service';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems = [];

  constructor(private _msgService: MessangerService) {}
  cartTotal = 0;
  ngOnInit(): void {
    this._msgService.getMsg().subscribe((product: Product) => {
      this.addToCart(product);

      console.log(this.cartTotal);
    });
  }
  addToCart(product: Product) {
    let productExists = false;
    // product exists then increase the quantity by 1
    for (const i in this.cartItems) {
      if (this.cartItems[i].productId === product.id) {
        this.cartItems[i].qty++;
        productExists = true;
        break;
      }
    }
    // add product to item if product not exists
    if (!productExists) {
      this.cartItems.push({
        productId: product.id,
        productName: product.name,
        qty: 1,
        price: product.price,
      });
    }

    this.cartTotal = 0;
    this.cartTotal = this.cartItems.reduce((acc, curr) => {
      return acc + curr.qty * curr.price;
    }, 0);
  }
}
