import { Component, inject, OnInit } from '@angular/core';
import { BrandService } from '../../../services/brand.service';
import { Brand } from '../../../interfaces/Brand.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-brands-list.component',
  imports: [RouterLink],
  templateUrl: './brands-list.component.html',
  styleUrl: './brands-list.component.css'
})
//El implements te obliga a que escribaer bien el nombre del método de inicialización
export class BrandsListComponent implements OnInit {
  brandService = inject(BrandService);

  brands : Brand[] = [];

  ngOnInit(): void {
      this.loadData();
  }

  loadData(){
    this.brandService.getBrands().subscribe(data =>{
      this.brands = data;
    })
  }
}
