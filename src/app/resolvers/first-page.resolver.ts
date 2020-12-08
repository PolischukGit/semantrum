import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { fromPromise } from 'rxjs/internal-compatibility';
import { RestService } from '../services/rest.service';

@Injectable()
export class FirstPageResolver implements Resolve<any> {

  constructor(private restService: RestService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const isFirstPart = state.url === '/first/1';
    return this.restService[isFirstPart ? 'getRapidAPIData' : 'elseData']();
  }
}
