import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../auth.service";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { inject } from '@angular/core';
import {  CanActivateFn} from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate
{
  constructor( private authService :AuthService, private  router : Router){};
  // canActivate(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot):
  //  boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  //   let isLoggedIn = this.authService.isAuthenticated();
  //     if(isLoggedIn){
  //       return true;
  //     }
  //     else {
  //       return this.router.navigate(['/users'])
  //     }
  //   throw new Error("Method not implemented.");
  // };

  canActivate(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
    ):boolean | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      return true;
    }

  //   CanActivateFn = (
  //     _route: ActivatedRouteSnapshot,
  //     _state: RouterStateSnapshot
  //     ) => {
  //     let isLoggedIn = this.authService.isAuthenticated();
  //     if(isLoggedIn){
  //       return true;
  //     }
  //     else {
  //       return this.router.navigate(['/users'])
  //     }
  // }

}
