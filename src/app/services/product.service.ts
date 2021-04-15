import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
        id: '965821',
        title: 'cosmétique',
        price: 45,
        createdat:'20-03-2021',
        categoryname:'médicament',
        categoryid:'1234567'
    },
    {
        id: '965822',
        title: 'medicament',
        price: 25,
        createdat:'20-02-2021',
        categoryname:'bébé',
        categoryid:'654321'
    }
  ];

  constructor() { }

  getProductsFromData(): Product[] {
    return this.products;
  }

//   addUser(user: User) {
//     user.id = this.upersons.length + 1;
//     this.upersons.push(user);

//   }
//   updateUser(user: User) {
//     const index = this.upersons.findIndex(u => user.id === u.id);
//     this.upersons[index] = user;
//   }
//   deleteUser(user: User) {
//     this.upersons.splice(this.upersons.indexOf(user), 1);
//   }

}