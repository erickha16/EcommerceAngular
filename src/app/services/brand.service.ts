import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Brand } from '../interfaces/Brand.model';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  //Inyección de dependencias
  constructor(private http: HttpClient) { }

   //Listado de categorias 
    public getBrands(): Observable<Brand[]>{
      // return this.http.get<Category[]>(this.urlApi);
      return this.http.get<Brand[]>(environment.api.brands);
    }
    
    //Agregar sin imagen
    // public postBrand1(brand: Brand):Observable<Brand>{
    //   return this.http.post<Brand>(environment.api.brands, brand);
    // }

    //Médoto para crear una marca con logo (FormData)
    public postBrand(formData: FormData):Observable<any>{
      return this.http.post(environment.api.brands, formData);
    }
}
