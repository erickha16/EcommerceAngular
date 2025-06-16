import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/Category.model';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  // private readonly urlApi: string = 'https://localhost:7048/api/v1/categories';
  // private readonly urlApi: string = environment.api.categories;


  //Inyección de dependencias
  constructor(private http: HttpClient) { }

  //Listado de categorias 
  public getCategories(): Observable<Category[]>{
    // return this.http.get<Category[]>(this.urlApi);
    return this.http.get<Category[]>(environment.api.categories);
  }

}
