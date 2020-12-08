import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { combineLatest, Observable, of } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {}

  getRapidAPIData(): Observable<any> {
    const all$ = this.http.get(
      'https://covid-19-data.p.rapidapi.com/totals',
      {
        headers: {
          'x-rapidapi-key': '15dfd4b0a8mshefeb30e71e3a160p1e3be7jsn7a59ef43c174',
          'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
          useQueryString: 'true'
        }
      }
    );
    const ukraine$ = of('https://covid-19-data.p.rapidapi.com/country/code?code=ua').pipe(
      delay(1500),
      switchMap((url) => this.http.get(
        url,
        {
          headers: {
            'x-rapidapi-key': '15dfd4b0a8mshefeb30e71e3a160p1e3be7jsn7a59ef43c174',
            'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
            useQueryString: 'true'
          }
          }
        )
      )
    );
    return combineLatest([
      all$,
      ukraine$
    ]);
  }
}
