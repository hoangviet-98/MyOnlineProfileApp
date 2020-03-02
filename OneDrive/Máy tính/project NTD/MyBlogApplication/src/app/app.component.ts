import { Component } from '@angular/core';
import {PostService} from './services/post.service';
import {Post} from './services/Post'
@Component({
  selector: 'app-root',
  providers: [PostService],
  template: `
  <body>
  <div class= "container">
  <h1> Welcome </h1>
  <ul>
    <li *ngFor = "let post of posts">
      <h3> {{post.title}} </h3>
      <p> {{post.body}}</p>
  </li>
  </ul>
  </div>
  </body>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: Post[];
  title = "Hello"
 constructor(private _postService : PostService){
    this._postService.getPosts().then(
      posts => {this.posts = posts}
    );
 }
}
