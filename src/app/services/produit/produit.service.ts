import { Injectable } from '@angular/core';
import { Produit } from 'src/app/models/produit';
import { Categories } from 'src/app/models/categories';

import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
  

@Injectable({
    providedIn: 'root'
})

  @Injectable()
  export class ProduitService {
  
    constructor(private http:HttpClient) {}
  
    private url = 'https://localhost:44373/api/produit/all';
    private categoryUrl="https://run.mocky.io/v3/db2e868c-ec0f-4cc6-b3d7-bbc2fa657b9a?fbclid=IwAR1E0of4WdvXKJM-mF9ov_idT7sOSy27np6BTrXp-c2LAyupisavZvM8FmE";
    produits: Produit[] = []
    public getCategories(){
      return this.http.get<Categories>(this.url);
    }
    public getProduits(){
      return this.http.get<Produit[]>(this.url);
    }

    


    
  
  }