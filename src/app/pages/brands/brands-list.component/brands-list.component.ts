import { Component, inject, OnInit } from '@angular/core';
import { BrandService } from '../../../services/brand.service';
import { Brand } from '../../../interfaces/Brand.model';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common'; // Necesario para ngModel
import { FormsModule } from '@angular/forms'; // Módulo requerido para ngModel

@Component({
  selector: 'app-brands-list',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule], // Añade FormsModule
  templateUrl: './brands-list.component.html',
  styleUrl: './brands-list.component.css'
})
export class BrandsListComponent implements OnInit {
  brandService = inject(BrandService);
  brands: Brand[] = [];
  filteredBrands: Brand[] = []; // Lista filtrada
  searchTerm: string = ''; // Término de búsqueda

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.brandService.getBrands().subscribe(data => {
      this.brands = data;
      this.filteredBrands = data; // Inicializa la lista filtrada
    });
  }

  // Filtra las marcas según el término de búsqueda
  filterBrands() {
    this.filteredBrands = this.brands.filter(brand => 
      brand.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}