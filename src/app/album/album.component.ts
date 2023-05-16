import { Component, Input } from '@angular/core';
import { AlbumDetails } from '../models/album-details';
import { SongDetails } from '../models/song-details';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AlbumService } from '../services/album.service';
import { AlbumRate } from '../models/album-rate';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {
  @Input() album ?: AlbumDetails;
  @Input() songs !: Array<SongDetails>;
  totalSongs : number | undefined;

  filteredSongs !: Array<SongDetails>;

  constructor(private route: ActivatedRoute, private albumService : AlbumService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id  = params.get('id');
      this.albumService.getAlbumsDetails(id)
        .subscribe({
          next: (data : AlbumDetails) => this.album = data,
          error: (err: any) => console.log(err)
        }),
      this.albumService.getSongs(id)
        .subscribe({
          next: (data : SongDetails[]) => {
            this.songs = data;
            this.filteredSongs = data;
            this.totalSongs = data.length;
          },
          error: (err: any) => console.log(err)
        })
    })
  }

  onLike(){
    if(this.album){
      this.albumService.likeAlbum(this.album.id)
        .subscribe({
          next: (data : AlbumRate) => {
            this.albumService.getAlbumsDetails(String(data.id))
              .subscribe({
                next: (data : AlbumDetails) => this.album = data,
                error: (err) => console.log(err)
              })
          },
          error: (err) => console.log(err)
        });
    }
  }

  onDislike(){
    if(this.album){
      this.albumService.dislikeAlbum(this.album.id)
        .subscribe({
          next: (data : AlbumRate) => {
            this.albumService.getAlbumsDetails(String(data.id))
              .subscribe({
                next: (data : AlbumDetails) => this.album = data,
                error: (err) => console.log(err)
              })
          },
          error: (err) => console.log(err)
        });
    }
  }

  filterByName(name : number){
    if(name == 0){
      this.filteredSongs = this.songs;
      return;
    }
    //this.filteredSongs = this.songs.filter((song: SongDetails ) => song.name == name);
  }
}


