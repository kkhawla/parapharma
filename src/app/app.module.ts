import { InterceptorService } from './loader/interceptor.service';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TournoiComponent } from './components/tournoi/tournoi.component';
import { PhaseComponent } from './components/phase/phase.component';
import { JoueurComponent } from './components/joueur/joueur.component';
import { ResultatComponent } from './components/resultat/resultat.component';
import { AboutComponent } from './components/about/about.component';
import { ProductComponent } from './components/product/product.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProduitComponent } from './components/produit/produit.component';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const appRoute: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'product', component: ProductComponent },
  { path: 'produit', component: ProduitComponent },
  {path: 'category',component:CategoriesComponent},
  { path: 'joueur', component: JoueurComponent },
  { path: 'tournoi', component: TournoiComponent },
  { path: 'phase', component: PhaseComponent },
  { path: 'resultat', component: ResultatComponent },
  { path: 'About', component: AboutComponent }

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
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  declarations: [
    AppComponent,
    TournoiComponent,
    PhaseComponent,
    JoueurComponent,
    ResultatComponent,
    AboutComponent,
    ProductComponent,
    CategoriesComponent,
    ProduitComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
