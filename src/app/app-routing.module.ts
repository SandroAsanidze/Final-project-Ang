import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RegistrationComponent } from './registration/registration.component';
import { authGuard } from './core/guard/auth.guard';
import { productResolver } from './product.resolver';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'main',
    canActivate:[authGuard],
    component: MainComponent
  },
  {
    path:'products',
    resolve: { productsData: productResolver },
    loadChildren:()=> import('./products/product-details/products/products.module').then(p => p.ProductsModule)
  },
  {
    path:'registration',
    component:RegistrationComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
