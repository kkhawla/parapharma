import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Categories} from 'src/app/models/categories';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) {}
  private url='https://localhost:44737';

  public getCategories(pageNumber: number, pageSize: number): Observable<Categories> {
    return this.http.get<Categories>(this.url + '/api/categories/all/' + 
    pageNumber + '/' + pageSize);
  }
}
