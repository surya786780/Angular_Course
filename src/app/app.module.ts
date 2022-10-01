import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SummaryPipe } from './summary.pipe';

import {HelloComponent} from './hello.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import {HttpClientModule} from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
// import { OrderService } from './services/order.service';
// import { AuthService } from './services/auth.service';
// import { fakeBackendProvider } from './helpers/fake-backend';
// import {RouterModule} from './@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    SummaryPipe,
    HelloComponent,
    ContactFormComponent,
    SignupFormComponent,
    PostsComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent 
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,

    
  ],
  providers: [
      // OrderService,
      // AuthService,
      // for creating a mock-backend, you dont need these in a real app.
      // fakeBackendProvider,
      // MockBackend,
      // BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
