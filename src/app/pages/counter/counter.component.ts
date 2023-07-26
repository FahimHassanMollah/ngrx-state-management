import { ICounter } from './../../features/counter/model';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment } from 'src/app/features/counter/action';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  constructor(private store : Store<{counter:ICounter}>) { }
  counter$ : Observable<ICounter> = this.store.select('counter');
  incrementHandler() {
    this.store.dispatch(increment());
  }
  ngOnInit(): void {
 
    
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
}
