import { Component } from '@angular/core';
import { Product } from '../../../interfaces/Product.model';
import { ProductService } from '../../../services/product.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products-list.component',
  imports: [RouterLink],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
    products: Product[] = [];

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
