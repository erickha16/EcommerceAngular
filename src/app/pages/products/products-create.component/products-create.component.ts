import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Category } from '../../../interfaces/Category.model';
import { Brand } from '../../../interfaces/Brand.model';
import { ProductService } from '../../../services/product.service';
import { CategoryService } from '../../../services/category.service';
import { BrandService } from '../../../services/brand.service';

@Component({
  selector: 'app-products-create.component',
  imports: [ReactiveFormsModule, CommonModule, RouterModule, RouterLink],
  templateUrl: './products-create.component.html',
  styleUrl: './products-create.component.css'
})
export class ProductsCreateComponent {
    productForm!: FormGroup; // Declaración del formulario reactivo como FormGroup
  categories: Category[] = [];
  brands: Brand[] = [];

  constructor(
    private readonly productService: ProductService, 
    private readonly formBuilder: FormBuilder, 
    private readonly router: Router,
    private readonly categoryService: CategoryService,
    private readonly brandService: BrandService
  ) 
  { }

   // El método ngOnInit es un ciclo de vida que se ejecuta cuando el componente se inicializa
  ngOnInit(): void {
    // Inicializar el formulario con un grupo de controles
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required, Validators.min(0.1)]],
      categoryId: ['', [Validators.required]],
      brandId: ['', [Validators.required]]
    });    

    // Obtiene las categorías
    this.categoryService.getCategories().subscribe({

      next: (data) => {
        this.categories = data;
      },
      error: (err) => {
        console.error('Error al obtener categorías:', err);
      }
    });

    // Obtiene las marcas
    this.brandService.getBrands().subscribe({

      next: (data) => {
        this.brands = data;
      },
      error: (err) => {
        console.error('Error al obtener categorías:', err);
      }
    });
    
  }

  enviarFormulario(){
    // Marcar todos los campos como tocados para mostrar los mensajes de error
    this.productForm.markAllAsTouched();

    if(this.productForm.invalid){
      return; // No enviar el formulario si es inválido
    }

    // Obtener los datos del formulario para enviarlos
    const productData = this.productForm.value;

    // Llamar al servicio para enviar los datos del producto
    this.productService.postProduct(productData).subscribe({
      next: response => {
        this.router.navigate(['/products']); //Redirigir a la lista de productos
      },
      error: err => {
        console.log("Error al crear el producto", err);
      }
    });

  }
}
