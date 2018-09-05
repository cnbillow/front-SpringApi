import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TestService} from '../service/testService.service';



@Injectable({
	providedIn: 'root'
})
export class TestResolver implements Resolve<any> {
  constructor(private testService: TestService) {}
 
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
   ): Observable<any>|Promise<any>|any {

     return this.testService.gerAllTests();

  }
}