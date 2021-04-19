import { CategoryService } from './../../services/category/category.service';
import { Component, OnInit } from '@angular/core';
import {Categories} from 'src/app/models/categories';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
 categories: Categories;
 pageNumber:number = 1;
 pageEvent: PageEvent;
  constructor( private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategories()
  }
  getCategories(){
    this.categoryService.getCategories(this.pageNumber, 2)
    .subscribe(data => {
      this.categories= data;
    });
  }
  onPaginateChange(event: PageEvent){
    let page = event.pageIndex;
    let size = event.pageSize;
    page = page + 1;
    this.categoryService.getCategories(page, size)
    .subscribe( data => {
      this.categories = data;
    });
  }

}
