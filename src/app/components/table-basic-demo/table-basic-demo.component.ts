// src/app/components/table-basic-demo/table-basic-demo.component.ts
import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
  selector: 'app-table-basic-demo',
  templateUrl: './table-basic-demo.component.html',
  styleUrls: ['./table-basic-demo.component.css']
})
export class TableBasicDemoComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
}