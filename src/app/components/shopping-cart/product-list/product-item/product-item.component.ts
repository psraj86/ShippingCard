import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { MessangerService } from 'src/app/services/messanger.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  constructor(private _msgService: MessangerService) {}

  ngOnInit(): void {}

  handleAddToCart() {
    this._msgService.sendMsg(this.product);
  }
}
