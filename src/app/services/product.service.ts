import { Injectable } from '@angular/core';
import { Product } from '../models/product';

import { Categories } from 'src/app/models/categories';

import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
  

@Injectable({
    providedIn: 'root'
})

  @Injectable()
  export class ProductService {
  
    constructor(private http:HttpClient) {}
  
    private url = 'https://localhost:5001';
    //private categoryUrl="https://run.mocky.io/v3/db2e868c-ec0f-4cc6-b3d7-bbc2fa657b9a?fbclid=IwAR1E0of4WdvXKJM-mF9ov_idT7sOSy27np6BTrXp-c2LAyupisavZvM8FmE";
    products: Product[] = []
    public getCategories(){
      return this.http.get<Categories>(this.url);
    }
    public getProducts(){
      return this.http.get<Product[]>(this.url+"/api/products/all");
    }
    public deleteproduct(id:string){
      return this.http.delete(this.url+'/api/products/delete'+id);
    }
  }