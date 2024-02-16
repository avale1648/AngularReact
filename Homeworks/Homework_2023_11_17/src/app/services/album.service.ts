import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { AlbumModel } from "../models/album/album.model";
import {Injectable} from "@angular/core";
//
@Injectable()
class AlbumService{
    private url: string = "https://jsonplaceholder.typicode.com/albums";
    constructor(private httpclient: HttpClient){
    }
    getAlbumsList(): Observable<AlbumModel[]>{
        return this.httpclient.get<AlbumModel[]>(this.url);
    }
}
export default AlbumService;