import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const apiKey = 'd0d1f1725346c2da17ae303c86f847da';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private path: string = 'https://api.themoviedb.org/3/';

  private popular: string = 'discover/movie?sort_by=popularity.desc';

  private authentication: string = '&api_key=';

  private theatres : string = 'discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2015-10-22'; 

  constructor(private http: HttpClient) { }

  getPopular(): Observable<Movies> {  
    return this.http.get<Movies>(this.path + this.popular + this.authentication + apiKey);
  }

  getTheaters(): Observable<Movies> {
    return this.http.get<Movies>(this.path + this.theatres + this.authentication + apiKey);
  }
}
