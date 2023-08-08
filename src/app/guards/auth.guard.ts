  import { Injectable } from '@angular/core';
  import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree,
  } from '@angular/router';
  import { Observable } from 'rxjs';
  import { AuthService } from '../services/auth/auth.service';
  import { MessageService } from 'primeng/api';

  @Injectable({
    providedIn: 'root',
  })
  export class AuthGuard implements CanActivate {
    constructor(
      private readonly authService: AuthService,
      private readonly router: Router,
      private readonly messageService: MessageService
    ) {}

    //prettier-ignore
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      const loggedIn = this.authService.currentUserValue != null;

      if (loggedIn) {
        return true;
      }

      this.router.navigate(['auth/login']);

      this.messageService.add({severity: 'warn', detail: 'Üyelik girişine yönlendiriliyorsunuz'});

      return false;
    }
  }
