import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'main',
    pathMatch:'full'
  },
  {
    path:'main',
    component: MainComponent
  },
  {
    path:'products',
    loadChildren:()=> import('./products/product-details/products/products.module').then(p => p.ProductsModule)
    // component:ProductsComponent
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
