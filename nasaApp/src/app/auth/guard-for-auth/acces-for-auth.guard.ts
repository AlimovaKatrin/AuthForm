import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../auth.component.service';

@Injectable({ providedIn: 'root' })
export class AccesForAuthGuard implements CanActivate {
    constructor(public auth: AuthService, public router: Router) { }

    canActivate() {
        if (this.auth.isAuthenticated()) {
            this.router.navigate(['main']);
            return false;
        }
        return true;
    }
}