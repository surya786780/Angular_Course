import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostsComponent } from './posts/posts.component';
// import { AuthService } from './services/auth.service';
// import { OrderService } from './services/order.service';

const routes: Routes = [
    // {path:'',component:HomeComponent},
    // {path:'followers/:id',component:GithubProfileComponent},
    // {path:'followers',component:GithubFollowersComponent},
    // {path:'posts',component:PostsComponent},
    // {path:'**',component:NotFoundComponent},

    // Authendication and authorization routes
    {path:'',component:HomeComponent},
    {path:'admin',component:AdminComponent},
    {path:'login',component:LoginComponent},
    {path:'no-access',component:NoAccessComponent},
  
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
