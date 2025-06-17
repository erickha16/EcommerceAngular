import { Injectable } from '@angular/core';
import { Product } from '../interfaces/Product.model';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    constructor(private http: HttpClient) { }

  // Listado de productos
  public getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(environment.api.products);
  }


  // Obtiene un producto
  public getById(id: number): Observable<Product>
  {
    return this.http.get<Product>(`${environment.api.products}/${id}`);
  }

  // Crear nuevo producto
  public postProduct(product: Product): Observable<Product>
  {
    return this.http.post<Product>(environment.api.products, product);
  }

  // Actualizar producto
  public updateProduct(id:number, product: Product): Observable<Product>
  {
    return this.http.put<Product>(`${environment.api.products}/${id}`, product);
  }

  // Eliminar producto
  public deleteProduct(id: number): Observable<void>
  {
    return this.http.delete<void>(`${environment.api.products}/${id}`);
  }
}
