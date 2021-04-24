import { CategoryService } from './services/category.service';
import { InterceptorService } from './loader/interceptor.service';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ProductComponent } from './components/product/product.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProduitComponent } from './components/produit/produit.component';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CategoryComponent } from './components/category/category.component';
import {MatPaginatorModule}from '@angular/material/paginator';
import {Categories} from 'src/app/models/categories';
import {PageEvent} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';
const appRoute: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'product', component: ProductComponent },
  { path: 'produit', component: ProduitComponent },
   {path: 'category',component:CategoryComponent},
  { path: 'About', component: AboutComponent },
  {path: 'product-details/:id', component: ProductdetailComponent}

];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoute),
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatIconModule,
    MatPaginatorModule
  ],
  exports: [RouterModule],
  declarations: [
    AppComponent,
    AboutComponent,
    ProductComponent,
    CategoriesComponent,
    ProduitComponent,
    CategoryComponent,
    ProductdetailComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
