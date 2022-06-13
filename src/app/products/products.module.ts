import { ProductsRoutingModule } from './products.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    MatNativeDateModule,
    ProductsRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatDatepickerModule,
  ]
})
export class ProductsModule { }
