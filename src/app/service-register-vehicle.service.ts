import { Injectable } from '@angular/core';
import {Vehicle} from './models/Vehicle.model';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { of } from 'rxjs/observable/of';
import {Response} from './models/Response.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ServiceRegisterVehicleService {

  private addVehicleUrl = 'http://127.0.0.1:1337/parking/21/vehicles';  // URL to web api

  constructor( private http: HttpClient, private messageService: MessageService) { }

  /** POST: add a new hero to the server */
  addVehicle (vehicle: Vehicle): Observable<Response> {
    return this.http.post<Response>(this.addVehicleUrl, vehicle, httpOptions).pipe(
      tap((response: Response) => this.log(`added vehicle w/ id=${response.message}`) ),
      catchError(this.handleError<Response>('addVehicle'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }
}
