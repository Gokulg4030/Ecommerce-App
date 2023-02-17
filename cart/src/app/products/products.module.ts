import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { CartComponent } from './cart/cart.component';
import { WishListComponent } from './wish-list/wish-list.component';
import {HttpClientModule} from '@angular/common/http';
import { FilterPipe } from './pipe/filter.pipe'

@NgModule({
  declarations: [
    ProductsComponent,
    AllProductsComponent,
    CartComponent,
    WishListComponent,
    FilterPipe                // import filterpipe
    
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
                            // import httpClientModule  for setting path
  ]
})
export class ProductsModule { }
