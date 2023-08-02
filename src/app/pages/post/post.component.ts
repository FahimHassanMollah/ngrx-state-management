import { counter } from 'src/app/features/counter/selector';
import { posts } from './../../features/post/post.selector';


import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IPost, IPosts } from 'src/app/features/post/post.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
   posts$ : Observable<IPost[]>  = this.store.select(posts);
  constructor(private store : Store<{posts :IPosts}>) {
    this.store.select(posts).subscribe((data) => {
      console.log(data);
    })
    
   }
}
