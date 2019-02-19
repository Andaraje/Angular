import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log("Spotify service listo");
  }
  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQDyg0TZWB3dUCY5EjwVERuWbh3pVml0-5gSRve3Gp6lG-kGBpS9GUgw2ervPc0x-V3O3rCdGoPyXrYWeRk'
    })
    this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
    .subscribe( data => {
      console.log(data);
    })
  }
}
