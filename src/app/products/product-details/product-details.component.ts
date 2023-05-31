import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from 'src/app/core/api.service';
import { Products } from '../products.interface';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productData!:Products
  productId!:number
  constructor(private _route:ActivatedRoute, private _service:APIService, private _router:Router){
    const currentRouteSnapshot = this._route.snapshot;
    this.productId = Number(currentRouteSnapshot.paramMap.get('id'))
    const currentProductId = Number(currentRouteSnapshot.paramMap.get('id'))
    this._service.getSingleProduct(currentProductId).subscribe(result => this.productData = result)

    this.productData = this._route.snapshot.data['productDetailData']
    
  }
  ngOnInit(): void {
    
  }

  backPage(){
    this._router.navigate(['/products'])
  }
}
