import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlbumGateway } from '../../../domain/models/Album/gateway/album-gateway';
import { Album } from '../../../domain/models/Album/album';
import { Observable, delay, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export  class AlbumApiService extends AlbumGateway {
  private _url = 'https://jsonplaceholder.typicode.com/albums/';
  constructor(private http: HttpClient) {super();}
  getByID(id: String): Observable<Album> {
    return of({ userId: 1234, id: 5, title: "asasas"});
  }
  getAll(): Observable<Album[]> {
    return this.http.get<Array<Album>>(this._url);
  }
  saveNew(_alb: Album): Observable<void> {
    throw new Error('Method not implemented.');
  }
}