import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// MODULE DE API
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { PostComponent } from './component/post/post.component';
import { UsersComponent } from './component/users/users.component';
import { AlbumsComponent } from './component/albums/albums.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    UsersComponent,
    AlbumsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }