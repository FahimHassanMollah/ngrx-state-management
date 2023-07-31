import { counter } from 'src/app/features/counter/selector';
import { posts } from './../../features/post/post.selector';


import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IPosts } from 'src/app/features/post/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  constructor(private store : Store<{po :IPosts}>) {
    this.store.select(posts).subscribe((data) => {
      console.log(data);
    });
    // console.log(this.store.select(posts));
    
   }
}
