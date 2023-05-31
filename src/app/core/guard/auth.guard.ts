import { Inject, Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,Router,RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { APIService } from '../api.service';

// Injectable({
//   providedIn:'root'
// })

// export class AuthGuard implements CanActivate {
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean |UrlTree {
//       return false;
//     }
// }

export const authGuard = () => {
  const authService = inject(APIService)
  const router = inject(Router)
  if(authService.isAuthorized()) {
    return true
  }
  return router.parseUrl('/')
}
