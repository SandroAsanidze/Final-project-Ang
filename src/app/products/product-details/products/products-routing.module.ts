import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from '../product-details.component';
import { ProductsComponent } from '../../products.component';
import { productDetailResolver } from 'src/app/core/resolvers/httpresolver.resolver';

const routes: Routes = [
  {
    path:'',
    component: ProductsComponent
  },
  {
    path:":id",
    component:ProductDetailsComponent,
    resolve: { productDetailData: productDetailResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
