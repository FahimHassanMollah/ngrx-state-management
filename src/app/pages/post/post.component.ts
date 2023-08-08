import { counter } from 'src/app/features/counter/selector';
import { posts } from './../../features/post/post.selector';


import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IPost, IPostState } from 'src/app/features/post/post.model';
import { Observable } from 'rxjs';
import { deletePost } from 'src/app/features/post/post.action';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  posts$: Observable<IPost[]> = this.store.select(posts);
  constructor(private store: Store<{ posts: IPostState }>) {
    this.store.select(posts).subscribe((data) => {
      console.log(data);
    })

  }
  deletePostHandler(id: Number) : void {
    if (confirm('Are you sure you want to delete this post?')) {
      this.store.dispatch(deletePost({id}));
    }
  }
}
