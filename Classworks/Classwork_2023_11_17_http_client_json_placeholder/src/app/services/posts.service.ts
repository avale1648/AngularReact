import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { PostModel } from "../models/post.model";
import {Injectable} from "@angular/core";
//
@Injectable()
class PostsService{
    private url: string = "https://jsonplaceholder.typicode.com/posts";
    constructor(private httpclient: HttpClient){
        
    }
    getPostsList(): Observable<PostModel[]>{
        return this.httpclient.get<PostModel[]>(this.url);
    }
}
//
export default PostsService;