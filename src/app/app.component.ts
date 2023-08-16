import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loading } from './features/shared/shared.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ngrx-state-management';
  loading$ :  Observable<boolean>  = this.store.select(loading);
  constructor(private store: Store) { }

}
