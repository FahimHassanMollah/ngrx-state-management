import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CounterComponent } from './pages/counter/counter.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';    
import { appReducer } from './store/store';
import { PostComponent } from './pages/post/post.component';
import { AddpostComponent } from './pages/post/addpost/addpost.component';
import { EditPostComponent } from './pages/post/edit-post/edit-post.component';
import { LoginComponent } from './pages/login/login.component';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { LoginEffects } from './features/login/login.effects';
import { LoaderComponent } from './components/loader/loader.component';
import { NavbarComponent } from './components/navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    PostComponent,
    AddpostComponent,
    EditPostComponent,
    LoginComponent,
    LoaderComponent,
    NavbarComponent,
    
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([LoginEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
