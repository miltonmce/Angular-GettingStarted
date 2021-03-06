import { NgModule } from '@angular/core';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [ProductsListComponent, ProductDetailComponent],
  imports: [
    ProductRoutingModule,
    SharedModule,
  ],
})
export class ProductModule {}
