import { Component } from '@angular/core';
import { Product } from '../../../interfaces/Product.model';
import { ProductService } from '../../../services/product.service';
import { RouterLink } from '@angular/router';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-products-list.component',
  imports: [RouterLink, MatSlideToggleModule, FormsModule, ReactiveFormsModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
    products: Product[] = [];
    isChecked = false;

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      console.log(data);
    });
  }
}
