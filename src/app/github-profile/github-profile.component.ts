import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(
    private nav:Router,
    private route: ActivatedRoute
    ) { 
  }
// programattic navigation (nav)
submit(){
  this.nav.navigate(['/followers'],{ 
    queryParams: {page:1, order:'newest'}
  });

  }


  ngOnInit() {
    // this.route.paramMap.
    // subscribe(params => {
      // console.log("gitprofile");
    //   // params.get('id');
    // })

// same as above
    this.route.snapshot.paramMap.get('id');
    // console.log(id);
  }
  
}
