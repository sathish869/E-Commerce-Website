import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Product, Root } from 'src/model/product.model';
import { apiBridgeService } from 'src/services/apiBridge.service';
import { CartService } from 'src/services/cart.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-shopping-page',
  templateUrl: './shopping-page.component.html',
  styleUrls: ['./shopping-page.component.css'],
})
export class ShoppingPageComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<Product>;
  productDetails: Root = null;
  products: Product[] = [];
  constructor(
    private apiBridge: apiBridgeService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private cartService: CartService
  ) {}
  ngOnInit(): void {
    this.apiBridge.getProductData(0, 10).subscribe((value: Root) => {
      console.log(value.products);
      this.setCount(value.products);
    });
    this.dataSource = new MatTableDataSource(this.products);
    this.dataSource.paginator = this.paginator;
  }

  setCount(Products: Product[]) {
    for (let product of Products) {
      product.count = 1;
    }
    this.products = Products;
  }

  gotoCart() {
    this.router.navigate(['/ship']);
  }
  updateCart(temp: Product) {
    this.cartService.pushIntoCart(temp);
    this.cartService.emitCartProduct();
    this.matSnackBar.open('Product Added');
  }
  onPageChange(event: PageEvent) {
    console.log(event);
    this.apiBridge
      .getProductData(event.pageIndex * event.pageSize, event.pageSize)
      .subscribe((value) => {
        this.setCount(value.products);
        console.log(value);
      });
  }
}
