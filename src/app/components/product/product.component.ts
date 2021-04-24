import { Product } from './../../models/product';
import { Produit } from 'src/app/models/produit';
import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms';
import { Categories } from 'src/app/models/categories';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-produit',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService) { }
  products: Product[] = []
  categories:Categories
  addProductForm:boolean;

  ngOnInit(): void {
    this.getCategories()
    this.getProduits()
  }
  getProduits(){
    this.productService.getProducts()
    .subscribe( data => {
      this.products = data;
      console.log(data);
    });
  }
  removeProduit(produit:Produit){
    if(confirm("are you sure to delete"+produit.title)){
      this.productService.deleteproduct(produit.id).subscribe(data=> {
        alert('§{produit.title} is delete successfully')
        this.getProduits();
      });
    }
  }
  getCategories(){
    this.productService.getCategories()
    .subscribe( data => {
      this.categories = data;
      console.log(data);
    });
  }
  showAddProductForm(){
    this.addProductForm=true;
  }
  cancelNewProduct(){
    this.addProductForm=false;
  }
  form = new FormGroup({
    productName: new FormControl('', Validators.required),
    productDescription: new FormControl('', [
      Validators.required,
      Validators.minLength(30),
      Validators.maxLength(250)

    ]),
    productPrice: new FormControl('', [
      Validators.required,
      Validators.min(0.1),
      Validators.max(100000)
    ])
    ,
     categoryId: new FormControl('', [
     Validators.required
     ])
   });
   onSubmit(){
     alert(JSON.stringify(this.form.value));
   }
  }