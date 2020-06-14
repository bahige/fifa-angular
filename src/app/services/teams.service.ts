import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Team } from '../modals/team';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  constructor(private http: HttpClient) {}

  private url = 'https://extendsclass.com/api/json-storage/bin/bdbeaed';

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error');
  }

  getTeams(): Observable<Team[]> {
    return this.http
      .get<Team[]>(this.url)
      .pipe(map((data) => data['teams']))
      .pipe(catchError(this.errorHandler));
  }
}
