import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter.component';
import { PostComponent } from './pages/post/post.component';
import { AddpostComponent } from './pages/post/addpost/addpost.component';
import { EditPostComponent } from './pages/post/edit-post/edit-post.component';

const routes: Routes = [
  {
    path: '',
    component: CounterComponent
  },
  {
    path: 'posts',
    component : PostComponent,
    children : [
      {
        path : 'add',
        component : AddpostComponent
      },
      {
        path : 'edit/:id',
        component : EditPostComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
