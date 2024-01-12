import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './components/post-list/post-list.component';
import PostsService from './services/posts.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { HeaderComponent } from './components/header/header.component';
import { RouterLink } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
