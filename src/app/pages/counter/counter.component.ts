import { ICounter } from './../../features/counter/model';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment } from 'src/app/features/counter/action';
import { Observable } from 'rxjs';
import { counter } from 'src/app/features/counter/selector';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  value! : number ;
  constructor(private store : Store<{counter:ICounter}>) { }
  counter$ : Observable<ICounter> = this.store.select('counter');
  counter = this.store.select(counter);
  incrementHandler() {
    this.store.dispatch(increment( {value: this.value*1} ));
  }
  ngOnInit(): void {
    this.counter.subscribe((data) => {
      console.log(data);
    });
    
    
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
}
