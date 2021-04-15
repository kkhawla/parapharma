import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
private categories: Category[] = [
    {
        id: '965821',
        name: 'cosmétique',
        description:'est le bien etre ',
        createdat:'20-03-2021'
    
    },
    {
        id: '965822',
        name: 'médicaments',
        description:'est pour le soulagement ',
        createdat:'20-04-2021'
    }
  ];

  constructor() { }

  getCategoriesFromData(): Category[] {
    return this.categories;
  }
}