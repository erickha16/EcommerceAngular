import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { Product } from '../../../interfaces/Product.model';
import { Category } from '../../../interfaces/Category.model';
import { Brand } from '../../../interfaces/Brand.model';
import { ProductService } from '../../../services/product.service';
import { CategoryService } from '../../../services/category.service';
import { BrandService } from '../../../services/brand.service';

@Component({
  selector: 'app-products-update.component',
  imports: [ReactiveFormsModule, CommonModule, RouterModule, RouterLink],
  templateUrl: './products-update.component.html',
  styleUrl: './products-update.component.css'
})
export class ProductsUpdateComponent {
    private productId!: number;  // ID del producto a actualizar
  productForm!: FormGroup;  // Formulario reactivo
  productData!: Product;  // Datos del producto que se editarán
  categories: Category[] = [];
  brands: Brand[] = [];


  constructor(
    private route: ActivatedRoute,  // Para acceder a los parámetros de la URL
    private fb: FormBuilder,  // Para crear el formulario reactivo
    private productService: ProductService,  // Servicio para interactuar con la API
    private router: Router,  // Para redirigir al usuario después de la actualización
    private readonly categoryService: CategoryService,
    private readonly brandService: BrandService
  ) { }


  ngOnInit(): void {
    // Obtener el ID del producto de la URL
    this.productId = Number(this.route.snapshot.paramMap.get('id'));

    // Inicializar el formulario
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required, Validators.min(0.1)]],
      categoryId: ['', [Validators.required]],
      brandId: ['', [Validators.required]]
    });

    // Cargar los datos del producto para editar
    this.loadProductData();

    // Obtiene las categorías
    this.categoryService.getCategories().subscribe({
      next: (data) => { this.categories = data; },
      error: (err) => { console.error('Error al obtener categorías:', err); }
    });

    // Obtiene las marcas
    this.brandService.getBrands().subscribe({
      next: (data) => { this.brands = data; },
      error: (err) => { console.error('Error al obtener marcas:', err); }
    });
  }

  // Cargar al formulario los datos del producto desde la API
  loadProductData() {
    this.productService.getById(this.productId).subscribe(data => {
        this.productData = data;
        this.productForm.setValue({
          name: data.name,
          price: data.price,
          categoryId:data.categoryId,
          brandId: data.brandId
        });
    });
  }

  // Enviar el formulario para actualizar el producto
  updateProduct() {
    if (this.productForm.invalid) {
      return;  // No enviar si el formulario es inválido
    }

    const updatedProduct: Product = {
      id: this.productId,
      ...this.productForm.value  // Obtener los datos actualizados del formulario
    };

    this.productService.updateProduct(this.productId, updatedProduct).subscribe({
      next: () => {
        console.log('Producto actualizado');
        this.router.navigate(['/products']);  // Redirigir a la lista de productos
      },
      error: err => {
        console.error('Error al actualizar el producto:', err);
      }
    });
  }
}
