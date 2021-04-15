import { ProductService } from './../../services/product.service';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: Product[];
  userForm: boolean;
  isNewUser: boolean;
  newUser: any = {};
  editUserForm: boolean;
  editedUser: any = {};

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.getProducts();
  }

  getProducts(): Product[] {
    return this.productService.getProductsFromData();
  }

  // showEditUserForm(user: User) {
  //   if (!user) {
  //     this.userForm = false;
  //     return;
  //   }
  //   this.editUserForm = true;
  //   this.editedUser = user;
  // }

  // showAddUserForm() {
  //   // resets form if edited user
  //   if (this.users.length) {
  //     this.newUser = {};
  //   }
  //   this.userForm = true;
  //   this.isNewUser = true;

  // }

  // saveUser(user: User) {
  //   if (this.isNewUser) {
  //     // add a new user
  //     this.userService.addUser(user);
  //   }
  //   this.userForm = false;
  // }

  // updateUser() {
  //   this.userService.updateUser(this.editedUser);
  //   this.editUserForm = false;
  //   this.editedUser = {};
  // }

  // removeUser(user: User) {
  //   this.userService.deleteUser(user);
  // }

  // cancelEdits() {
  //   this.editedUser = {};
  //   this.editUserForm = false;
  // }

  // cancelNewUser() {
  //   this.newUser = {};
  //   this.userForm = false;
  // }

}
