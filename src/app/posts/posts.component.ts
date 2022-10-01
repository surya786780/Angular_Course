import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { async } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  url:any ="https://jsonplaceholder.typicode.com/posts";
  posts:any=[];

  constructor(private http: HttpClient) {
    this.http.get(this.url).subscribe(data => {
      // console.log(data);
      this.posts=data;
    });
   }

  ngOnInit(): void {
    
  }
  id:number=100;
  getPost(val:HTMLInputElement,index:any){
    let p = {id:index,title:val.value}
    this.posts.splice(0,0,p);
    val.value=" ";
    this.http.post(this.url, JSON.stringify(p))
    .subscribe(data => {
      // console.log(data);
       p.id = data;
    }
    
    )
  }


//   updatePost(upd:any){
//     this.http.put(this.url +'/'+ upd.id,+JSON.stringify(upd))
//     .subscribe(data => {
//       console.log(data);
//     })
// }  
  

deletePost(del:any){
  let index = this.posts.indexOf(del);
    this.posts.splice(index,1)
  this.http.delete(this.url + '/' + del.id)
  .subscribe(data => {
    // console.log(index)
  });
}
}
