import { Component, OnInit } from '@angular/core';
import {AlbumService} from '../services/album.service';
import { AlbumPreview } from '../models/album-preview';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums !: Array<AlbumPreview>;
  selectedAlbum ?: AlbumPreview;

  constructor(private albumService : AlbumService) {
    
  }

  ngOnInit(): void {
    this.albumService.getAlbums()
      .subscribe({
        next: (data : AlbumPreview[]) => {
          this.albums = data
        },
        error: (err: any) =>  console.log(err)
      })
  }

  onClick(album : AlbumPreview) : void {
    this.selectedAlbum = album;
  }
}
