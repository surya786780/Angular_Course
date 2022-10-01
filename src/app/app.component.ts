import { Component } from '@angular/core';


// interface checkType{
//   data:any; 
// }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],

  // template:`

  //       <!-- String Binding -->
  //       <!-- <h1>{{title}}</h1 > -->
  //       <!-- <img style="width:300px; height:300px;" src="{{imageUrl}}"/> -->
        
  //       <!-- Property Binding -->
  //       <!-- <h1 [textContent]="title"]></h1> -->
  //       <!-- <img [src]="imageUrl" />  --> 


  //       <!-- Attribute binding -->

  //       <!-- if any binding done that is must be a property or 
  //       attribute of DOM not html if that is attribute of
  //        html put attr.attributename -->
  //       <!-- <table>
  //         <tr>
  //           <td [attr.colspan]="cols"></td>
  //         </tr>
  //       </table> -->


  //       <!-- BOOTSTRAP -->
  //       <!-- <button class="btn btn-info">submit</button>
  //       <h1>okk bye</h1> -->

  //       <!-- Class binding -->
  //       <!-- Check in inspect and class of the button the class is added in the button class -->
  //       <!-- <h1 [class.active]="">Class binding</h1>
  //       <button [class.active]="check">class add</button> -->
    
  //       <!-- Style Binding (check multiple style property @DOM style object properties @ w3schools -->
  //       <!-- <button [style.backgroundColor]="check ? 'yellow' : 'green'">Style Binding</button>  -->

  //       <!--  EVENT BINDING (keyup,mousemove,... like that) $event is a OBJECT -->
  //       <!-- <div (click)="divClick()">

  //           <button  (click)="onClick($event)">click</button>
  //            <h3>{{a}}</h3>
  //       </div> -->


  //         <!-- Event FILTERING -->
  //         <!-- normal way -->
  //         <!-- <input  (keyup)="onkeyUp($event)"/> -->
  //         <!-- filtering -->
  //         <!-- <input #vl (keyup.enter)="onkeyUp(vl.value)"/> -->
  //         <!-- TEMPLATE VARIABLE -->
  //           <!-- <input  #tempvar (keyup.enter)="onkeyUp(tempvar.value)"/> -->

  //         <!-- TWO WAY BINDING -->
  //         <!-- <input [value]="name:null | any" (keyup.enter)="name=$event.target.value; twoway()"/> -->
  //         <!-- <input [(ngModel)]="name" (keyup.enter)="twoway()"/>  -->

  //         <!-- CUSTOM PIPES -->
  //         <!-- <h3>{{text | summary:100}}</h3> -->

  //   `
})
export class AppComponent {
  // title = 'ang-courses';
  // imageUrl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg";
  // cols = 2;

  // check = true;
  
//  a:any | null = "";
  
//  divClick(){
//    console.log("This is event bubbling inside button is clicked that the same time event bubble occur so previous div event also happened");
//    console.log("div is clicked");
   
//  }
//   onClick($event:any){
//     this.a = "button clicked";
//     // stop event bubble
//     $event.stopPropagation();
//     console.log(this.a , $event);
//   }


      // EVENT FILTERING  
      // Traditional way 
      // onkeyUp($event:any){
      //   // keyup.enter's traditional way of doing
      //   if($event.keyCode === 13){
      //     console.log($event.target.value);
      //   }
      // }
      // filtering
      // onkeyUp(v:any){
      //   console.log("Enter key is pressed", v);
      // }
      // template variable
      // onkeyUp(a:any){
      //   console.log(a);
      // }


      // TWO WAY BINDING
      // name:null | any = "surya";
      // twoway(){
      //   console.log(this.name);
      // }

      // CUSTOM PIPES 
      // text = `lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit am 
      // ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur adip
      //  lorem ipsum dolor sit am ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, 
      //  consectetur adip lorem ipsum dolor sit am ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet,
      //   consectetur adip lorem ipsum dolor sit am ipsum dolor sit amet, consectetur`;



// Input in FavoriteComponent
// post = {
//   name:"title",
//   isFavorite:false 
// }


                      //  PASS DATA PARENT TO CHILD USING INPUT
    // userName="surya from app";

    // from child ( RECEIVE DATA CHILD TO PARENT USING OUTPUT )
    // fromChild:any=[];
    // check type is a Interface used above
    // receivedata(val:checkType){
    //   this.fromChild.push(val);
    //   console.log(val);
    // }


    // DIRECTIVES
    // hidden property
    // nums = [1,2,4];
    // ngSwitch
    // view="";

    // ngFor and trackby
    // courses:any;
    // loadCourses(){
    //  this.courses = [
    //     {id:1, name:"c1"},
    //     {id:2, name:"c2"},
    //     {id:3, name:"c3"}
    //   ]
    // }

    // trackCourse(index:any, course:any){
    //   return course ? course.id : undefined;
    // }

    // ngFor and change Detection
    // courses = [
    //   {id:1, name:"c1"},
    //   {id:2, name:"c2"},
    //   {id:3, name:"c3"}
    // ]

    // onAdd(n:any){
      
    //   this.courses.push({id:this.courses.length+1,name:n})
    
    //   // console.log(this.courses);
    // }
    // onRemove(val:any){
    //   let index = this.courses.indexOf(val);
    //   this.courses.splice(index,1);
    // }

    // changeData="";
    // onup(data:any){
    //   this.changeData = data;
    //   // console.log(this.changeData);

    // }
    // onChange(upd:any){
    //   // console.log(this.courses);  
    //    upd.name = this.changeData;
    // }


// ngClass and ngStyle
// canSave=false;

// 

}
