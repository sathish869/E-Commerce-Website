import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from 'src/model/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  cartProduct: Product[] = [];
  public shareCartProducts = new Subject<Product[]>();
  public shareCartAmount = new Subject<number>();

  getCartValue(oneProduct: Product[]): void {
    this.shareCartAmount.next(this.calculateCartValue(oneProduct));
  }

  pushIntoCart(temp:Product){
    let i=0;
    for (let oneProduct of this.cartProduct) {
        if (oneProduct.id == temp.id) {
          oneProduct.count++;
          ++i;
        }
        break;
  }
  if(i==0){
    this.cartProduct.push(temp);
  }
}
  addCount(product: Product[], id: number) {
    for (let oneProduct of product) {
      if (oneProduct.id == id) {
        oneProduct.count++;
      }
    }
    this.shareCartProducts.next(product);
  }
  emitCartProduct(): void {
    this.shareCartProducts.next(this.cartProduct);
  }
  reduceCount(product: Product[], id: number) {
    for (let oneProduct of product) {
      if (oneProduct.id == id) {
        oneProduct.count--;
      }
    }
    this.shareCartProducts.next(product);
    this.getCartValue(product);
  }
  removeFromCart(product: Product[], id: number) {
    for (let i = 0; i < product.length; i++) {
      if (product[i].id == id) {
        product.splice(i, 1);
      }
      this.shareCartProducts.next(product);
      this.getCartValue(product);
    }
  }

  calculateCartValue(product: Product[]): number {
    let value = 0;
    product.forEach(element=>{
        value+=(element.count*element.price)
    })
    return value;
  }
}
