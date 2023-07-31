import { counterReducer } from './features/counter/reducer';
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CounterComponent } from './pages/counter/counter.component';
import {FormsModule} from '@angular/forms';    
import { postReducer } from './features/post/post.reducer';
import { appReducer } from './store/store';

import { PostComponent } from './pages/post/post.component';
@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    PostComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
