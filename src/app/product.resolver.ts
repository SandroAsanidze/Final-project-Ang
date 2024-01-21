import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { APIService } from './core/api.service';

export const productResolver: ResolveFn<any> = (route, state) => {
  const apiService = inject(APIService)
  return apiService.getProducts();
};
