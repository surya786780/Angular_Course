// import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { Observable } from 'rxjs';
// import 'rxjs/add/observable/combineLatest'; 

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers:any=[];

  // constructor(private service: GithubFollowersService) { }
constructor(private route: ActivatedRoute) { 

  }
  ngOnInit() {
    // // query parameters
    // Observable.combineLatest([
    //   this.route.paramMap,
    //   this.route.queryParamMap
    // ])
    //   .subscribe(combined => {
    //   let id = combined[0].get('id');
    //   let page = combined[1].get('page');

    //   // this.service.getAll()
    //   // .subscribe((followers: any) => this.followers = followers);
  
    // })
    // this.route.paramMap.subscribe(params => {
    // });
    // let id = this.route.snapshot.paramMap.get('id');

    // this.route.queryParamMap.subscribe(params => {
    // });
    // let page = this.route.snapshot.paramMap.get('page');


    //
    // console.log("followers");
  }

  
}
