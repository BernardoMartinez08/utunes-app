import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SongDetails } from '../models/song-details';
import { AlbumService } from '../services/album.service';
import { AlbumDetails } from '../models/album-details';
import { AlbumPreview } from '../models/album-preview';

@Component({
  selector: 'app-song-filter',
  templateUrl: './song-filter.component.html',
  styleUrls: ['./song-filter.component.css']
})
export class SongFilterComponent implements OnInit {
  constructor(){
    
  }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  @Output() changed = new EventEmitter<number>();

  onChange(target : any){
    this.changed.emit(parseInt(target.value));
  }

}
