import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addPost } from 'src/app/features/post/post.action';
import { IPost, IPostState } from 'src/app/features/post/post.model';
import { posts } from 'src/app/features/post/post.selector';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent {
  public posts : IPost[] = [];
  constructor(
    private store: Store<{ posts: IPostState }>,
  ) { };
  postSubscriber = this.store.select(posts).subscribe((data)=> {
    this.posts = data;
  });
  getUniqueID() {
    const maxPost = this.posts.reduce((acc, post) => {
      return acc.id > post.id ? acc : post;
    });
    return maxPost.id + 1;
  }
  addPostForm = new FormGroup({
    title: new FormControl('',
      [Validators.required, Validators.minLength(6)]),
    description: new FormControl('',
      [Validators.required, Validators.minLength(10)]),
  });
  
  
  get title()  { return this.addPostForm.get('title'); }

  get description() { return this.addPostForm.get('description'); }

  addPostHandler() {
    if (this.addPostForm.invalid) {
      return;
    }
   const post:IPost =  {
      id: this.getUniqueID(),
      title: this.addPostForm.value.title ?? '',
      description: this.addPostForm.value.description ?? '',
    };
    this.store.dispatch(addPost({post}));
    this.addPostForm.reset();
  }
  ngOnInit(): void {
    console.log(this.addPostForm);
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
}
