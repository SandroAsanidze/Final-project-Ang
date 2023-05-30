import { Component, OnInit } from '@angular/core';
import { APIService } from '../core/api.service';
import { Products } from './products.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  products: Products[]=[]
  constructor(private _productsService: APIService){

  }
  ngOnInit(): void {
    this._productsService.getProducts().subscribe(data =>{
      this.products = data
    })
  }
}
