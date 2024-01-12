import { Component } from '@angular/core';
import { PostModel } from 'src/app/models/post.model';
import PostsService from 'src/app/services/posts.service';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {
  posts: PostModel[] = [];
  constructor(private postsService: PostsService){
    this.getPosts();
  }
  getPosts(){
    this.postsService.getPostsList().subscribe(p => this.posts = p);
  }
}
