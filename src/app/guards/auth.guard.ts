import { Injectable } from '@angular/core';

import { CanActivate , ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authenticationService: AuthenticationService,
  	          private router: Router) { }



  canActivate(

  	 route: ActivatedRouteSnapshot,
  	 state: RouterStateSnapshot
     
  	): Observable<boolean> | boolean {

  	    if (this.authenticationService.statusUser()) {
  	    	return true;
  	    }

        this.router.navigateByUrl('/homws');
        return false;
     }

}
