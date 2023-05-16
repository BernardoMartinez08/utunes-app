import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumComponent } from './album/album.component';

const routes: Routes = [
  {path: 'albums', component:AlbumsComponent},
  {path: 'albums/:id', component:AlbumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
