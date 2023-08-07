import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { getPost, updatePost } from 'src/app/features/post/post.action';
import { IPost, IPostState } from 'src/app/features/post/post.model';
import { post } from 'src/app/features/post/post.selector';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent {

  private postSelectorSubscription!: Subscription;
  public currentPost : IPost | {} = {};
  public editPostForm!: FormGroup;
  

  constructor(
    private store: Store<{ posts: IPostState }>,
    private route : ActivatedRoute,
    private router : Router,
  ) { }
  editPostHandler() {
    if (this.editPostForm.invalid) {
      return;
    }
    const post: IPost = {
      id: (this.currentPost as IPost).id ,
      title: this.editPostForm.value.title ?? '',
      description: this.editPostForm.value.description ?? '',
    };
    this.store.dispatch(updatePost({ post }));
    this.router.navigate(['/posts']);
  }
  setEditPostForm(post: IPost | {}) {
    const editAblePost  = {
      id : (post as IPost)?.id ?? '',
      title: (post as IPost)?.title ?? '',
      description: (post as IPost)?.description ?? '',
    }
    this.editPostForm = new FormGroup({
      title: new FormControl(editAblePost.title,
        [Validators.required, Validators.minLength(6)]),
      description: new FormControl(editAblePost.description,
        [Validators.required, Validators.minLength(10)]),
    });
  }
    
  get title()  { return this.editPostForm.get('title'); }

  get description() { return this.editPostForm.get('description'); }
  postSubscriptionHandler() {
   this.postSelectorSubscription = this.store.select(post).subscribe((post) => {
      this.currentPost = post;
      this.setEditPostForm(this.currentPost );
    });
  }  
  ngOnInit(): void {
    this.postSubscriptionHandler();
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.store.dispatch(getPost({ id: Number(id)}));
    })
  }

}
