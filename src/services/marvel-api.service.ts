import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MarvelAPIService {

  api_key = 'c022fb90b14ca36a7ca640cebf698132'
  hash = 'a28afbf3ad4b92e6c4263daa40844e61'
  baseUrl = 'https://gateway.marvel.com:443/v1/public'
  endingUrl = `ts=1&apikey=${this.api_key}&hash=${this.hash}`;

  constructor(private http:HttpClient) {}

  getMain(main: String):Observable<any>
  {
    let characterByNameUrl = `${this.baseUrl}/characters?name=${main}&${this.endingUrl}`;
    return this.http.get(characterByNameUrl);
  }

  getStoryByURI(storyURI: String):Observable<any>
  {
    let storyUrl = `${storyURI}?${this.endingUrl}`;
    return this.http.get(storyUrl);
  }

  getCharacterByURI(characterURI: String):Observable<any>
  {
    let characterUrl = `${characterURI}?${this.endingUrl}`;
    return this.http.get(characterUrl);
  }
}
