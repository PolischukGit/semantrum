import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsteadNgrxLoadingSelectorService {
  /**
   * Subject for preloader running instead of store's loading key
   * */
  loading$ = new BehaviorSubject<boolean>(false);
}
