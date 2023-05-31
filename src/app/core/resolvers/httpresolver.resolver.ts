import {inject } from '@angular/core';
import {ActivatedRouteSnapshot} from '@angular/router';
import { APIService } from 'src/app/core/api.service';


export const productDetailResolver = (route: ActivatedRouteSnapshot) => {
  const apiService = inject(APIService)
  const productId = Number(route.paramMap.get('id'))
  return apiService.getSingleProduct(productId)

}