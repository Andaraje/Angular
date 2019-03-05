import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { getQueryPredicate } from '@angular/compiler/src/render3/view/util';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log("Spotify service listo");
  }
  getQuery( query: string){
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQAWVLVhEEKAnR-rMSAu2Ey8dif6vNpcEEFrJPfX_Z4lA701X46-z_dswecD49bGKvIjTkxUAlTS6-p8LRU'
    })
    return this.http.get(url, {headers});
  }
  getNewReleases() {
     return this.getQuery('browse/new-releases').pipe( map( data =>
      data['albums'].items));
  }

  getArtistas( termino: string) {
    return this.getQuery(`search?query=${ termino }&offset=0&limit=20&type=artist`).pipe( map( data =>
      data['artists'].items));
  }
  getArtista( id: string) {
    return this.getQuery(`artists/${ id }`);//.pipe( map( data =>
      //data['artists'].items));
  }
  getTopTracks( id: string) {
    return this.getQuery(`artists/${ id }/top-tracks?country=us`).pipe( map( data =>
      data['tracks']));
  }
  
}

