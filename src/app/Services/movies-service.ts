import { HttpClient } from '@angular/common/http';
import {inject,Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesResponse } from '../Models/movies-data';

@Injectable({
  providedIn: 'root',
})
export class MoviesService 
{
  private readonly httpClient=inject(HttpClient);
  GetAllMovies():Observable<MoviesResponse>
  {
     return this.httpClient.get<MoviesResponse>('https://api.sampleapis.com/movies/action-adventure');
  }

}
