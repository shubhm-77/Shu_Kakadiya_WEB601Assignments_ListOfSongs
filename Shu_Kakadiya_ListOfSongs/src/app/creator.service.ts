declare const require: any;

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Content } from './helper-files/content-interface';
// @ts-ignore
import { MessagesService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class CreatorServiceService {
  private songs: Content[] = [];
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}

  getSongs(): Observable<Content[]> {
    return this.http.get<Content[]>('api/songs');
  }

  addSong(songs: Content): Observable<Content> {
    return this.http.post<Content>('api/songs', songs, this.httpOptions);
  }

  updateSong(songs: Content): Observable<any> {
    return this.http.put(`api/songs/${songs.id}`, songs, this.httpOptions);
  }

  getSongById(id: number): Observable<any> {
    return this.http.get<Content>(`api/songs/${id}`);
  }
}

export class CreatorService {
}
