import { Component } from '@angular/core';
import { Product } from '../../../interfaces/Product.model';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar'

@Component({
  selector: 'app-products-delete.component',
  imports: [RouterLink],
  templateUrl: './products-delete.component.html',
  styleUrl: './products-delete.component.css'
})
export class ProductsDeleteComponent {
    productId!: number;  // ID del producto a eliminar
  productData!: Product;  // Datos del producto que se eliminará

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ){}

  ngOnInit(): void {
      this.productId = Number(this.route.snapshot.paramMap.get('id'));
      this.loadProductData();
  }

  loadProductData(){
    this.productService.getById(this.productId).subscribe( data => {
      const product = data;
      if(product){
        this.productData = product;
      }
    })
  }

  deleteProduct(){
    this.productService.deleteProduct(this.productId).subscribe({
      next: () => {
        this.snackBar.open('Producto eliminado con éxito', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'center',
            verticalPosition: 'top',
          panelClass: ['snack-bar-success']
        });
        this.router.navigate(['/products']);
      }
    });
  }
}
