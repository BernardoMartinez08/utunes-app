import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AlbumDetails } from '../models/album-details';
import { AlbumPreview } from '../models/album-preview';
import { AlbumRate } from '../models/album-rate';
import { SongDetails } from '../models/song-details';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private httpClient : HttpClient) { }

  getSongs(id : string | null) : Observable<SongDetails[]>{
    return this.httpClient.get<SongDetails[]>(`${environment.baseApiUrl}/Albums/${id}/songs`);
  }

  getAlbums() : Observable<AlbumPreview[]>{
    return this.httpClient.get<AlbumPreview[]>(`${environment.baseApiUrl}/Albums`);
  }

  getAlbumsDetails(id : string | null) : Observable<AlbumDetails>{
    return this.httpClient.get<AlbumDetails>(`${environment.baseApiUrl}/Albums/${id}/details`);
  }

  likeAlbum(id : number) : Observable<AlbumRate>{
    return this.httpClient.put<AlbumRate>(`${environment.baseApiUrl}/Albums/${id}/like`, null);
  }

  dislikeAlbum(id : number) : Observable<AlbumRate>{
    return this.httpClient.put<AlbumRate>(`${environment.baseApiUrl}/Albums/${id}/dislike`, null);
  }
}
