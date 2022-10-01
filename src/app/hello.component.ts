import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'hello',
    templateUrl: './hello.component.html',
    styleUrls: ['./hello.component.css'],

    // template:`
    //     <h1>hello component</h1>
    //     <!-- <h2><span>{{ln}}</span> - - i am from hello child</h2>  -->

    //     <!-- <button (click)="sendDatatoParent()">click</button> -->
    // `,
    // styles:['h1 {color:green;}',
    //         'span {color:red;}',        
    // ],

    // VIEW ENCAPSULATION
    // encapsulation: ViewEncapsulation.Emulated


})

export class HelloComponent {

    // inside input give any name that is called aliasname that is public name  then -> ln is a localname
    //  Input() for parent to child data passing 
    // @Input('nickname') ln:string="";

    // Output for child to parent data passing for this use EventEmitter
    // @Output() iamOut: EventEmitter<any> = new EventEmitter<any>();

    
    // pass data child to parent using INPUT not recommended for real production project
    
    // @Input() testMethod:any;
    // @Input() result:any; 
    // sendDatatoParent(){
    //    this.testMethod('TestMethod');
    //    this.result('hello from child result');
    //    this.iamOut.emit("i am output i send data from child to parent");
    // }


    




}