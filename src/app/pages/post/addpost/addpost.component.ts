import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent {
  
  addPostForm = new FormGroup({
    title: new FormControl('',
      [Validators.required, Validators.minLength(6)]),
    description: new FormControl('',
      [Validators.required, Validators.minLength(10)]),
  });
  get title() { return this.addPostForm.get('title'); }

  get description() { return this.addPostForm.get('description'); }
  addPostHandler() {
    console.log(this.addPostForm.value);
  }
}
