import { Produit } from 'src/app/models/produit';
import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms';
import { Categories } from 'src/app/models/categories';
import { ProduitService } from 'src/app/services/produit/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {

  constructor(private produitService: ProduitService) { }
  produits: Produit[] = []
  categories:Categories
  addProductForm:boolean;

  ngOnInit(): void {
    this.getCategories()
    this.getProduits()
  }
  getProduits(){
    this.produitService.getProduits()
    .subscribe( data => {
      this.produits = data;
      console.log(data);
    });
  }
  removeProduit(produit:Produit){
    if(confirm("are you sure to delete"+produit.title)){
      this.produitService.deleteproduit(produit.id).subscribe(data=> {
        alert('§{produit.title} is delete successfully')
        this.getProduits();
      });
    }
  }
  getCategories(){
    this.produitService.getCategories()
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