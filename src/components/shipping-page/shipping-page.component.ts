import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Product } from 'src/model/product.model';
import { CartService } from 'src/services/cart.service';
import html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-shipping-page',
  templateUrl: './shipping-page.component.html',
  styleUrls: ['./shipping-page.component.css'],
})
export class ShippingPageComponent implements OnInit, OnDestroy {

  headers: string[] = ['Product Name', 'Qty', 'Price', 'Amount'];
  invoiceAmount: number = 0;
  cartProduct: Product[] = [];
  constructor(private cartService: CartService) {}

  ngOnDestroy(): void {
    this.cartService.shareCartProducts.next([]);
  }

  ngOnInit(): void {
    this.cartProduct = this.cartService.cartProduct;
    this.cartService.shareCartProducts.subscribe((value: Product[]) => {
      this.cartProduct = value;
    });
    this.cartService.shareCartAmount.subscribe((value: number) => {
      this.invoiceAmount = value;
    });
    this.cartService.getCartValue(this.cartProduct);
  }

  addCount(product: Product[], id: number): void {
    this.cartService.addCount(product, id);
    this.cartService.getCartValue(product);
  }
  reduceCount(product: Product[], id: number, count: number): void {
    if (count <= 1) {
      this.removeFromCart(product, id);
    } else {
      this.cartService.reduceCount(product, id);
      this.cartService.getCartValue(product);
    }
  }
  removeFromCart(product: Product[], id: number): void {
    this.cartService.removeFromCart(product, id);
    this.cartService.getCartValue(product);
  }
  downloadPDF(): void {
    const element = document.getElementById('ProductTable');
    const options = {
      filename: 'table.pdf',
      html2canvas: {},
      jsPDF: { format: 'a4', orientation: 'landscape' },
    };
    
    html2pdf().set(options).from(element).save();
    element.style.display = 'table';
    
  }
}
