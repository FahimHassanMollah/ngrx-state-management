import { isauthenticatedSelector } from './../../features/login/login.selector';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isauthenticated$: Observable<boolean> = this.store.select(isauthenticatedSelector);
  constructor(
    private store: Store
  ) { }
}
