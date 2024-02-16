import { Component } from '@angular/core';
import { AlbumModel } from 'src/app/models/album/album.model';
import AlbumService from 'src/app/services/album.service';
@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent {
  albums: AlbumModel[] = [];
  constructor(private albumService: AlbumService){
    this.getAlbums();
  }
  getAlbums(){
    this.albumService.getAlbumsList().subscribe(a => this.albums = a);
  }
}
