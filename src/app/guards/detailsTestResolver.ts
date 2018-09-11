import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TestService} from '../service/testService.service';
import { Test } from '../entity/test';
import { Router, ActivatedRoute} from '@angular/router';


@Injectable({
	providedIn: 'root'
})
export class DetailsTestResolver implements Resolve<Test> {
  constructor(private testService: TestService,) {}
 
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
   ): Observable<Test>|Promise<any>|any {
      
     let testId = route.params['testId'];
     
     return this.testService.findTestById(testId);

  }
}