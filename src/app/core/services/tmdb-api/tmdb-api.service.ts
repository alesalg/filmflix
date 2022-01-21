import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TmdbApiService {

  baseUrl = 'https://api.themoviedb.org/3/';

  options = {
    api_key: 'cef71f2d056a6931ab1eba1d3bdb30b1',
    language: 'pt-BR'
  }

  constructor() { }
}
