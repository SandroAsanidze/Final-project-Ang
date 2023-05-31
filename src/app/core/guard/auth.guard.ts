import {inject} from '@angular/core';
import {Router} from '@angular/router';
import {APIService} from '../api.service';

export const authGuard = () => {
  const authService = inject(APIService)
  const router = inject(Router)
  if(authService.isAuthorized()) {
    return true
  }
  return router.parseUrl('/')
}
