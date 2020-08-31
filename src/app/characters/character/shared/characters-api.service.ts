import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {
  PUBLIC_KEY = '0d13efe4f821e5ef4f273c4a3ff95338';
  URL_API = 'https://gateway.marvel.com:443/v1/public/characters?apikey=0d13efe4f821e5ef4f273c4a3ff95338';

  constructor( private http: HttpClient) { }

  getAllCharacters () : Observable<any> {
    return this.http.get<any>(this.URL_API)
      .pipe(map((data: any) => data.data.results))
  }
}
