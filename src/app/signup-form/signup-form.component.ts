import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators, FormArray, FormBuilder } from '@angular/forms';

import { UsernameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  form:null|any = new FormGroup({
    // nested formGroup
    account: new FormGroup({
        username:new FormControl('',
      // [
        Validators.required,
        UsernameValidators.shouldBeUnique,
        // Validators.minLength(2),
        // Validators.maxLength(10), 
        // Validators.pattern('sk'),
        
        // Custom validators
        // UsernameValidators.cannotContainSpace,
        //  Asynchronous Validator
      // ]

      ),
      password:new FormControl('',Validators.required)
      })
    })


  get username(){
    return this.form.get('account.username');
  }


// // validation form

// login(){
//   // this is for we connect server side
//   let isValid = authService.login(this.form.value);
//   if(!isValid){
//     this.form.setError({
//       invalidLogin:true
//     })
//   }
// }
// for normal
login(){
  // console.log("error");
  this.form.setErrors({
    
    invalidLogin:true
  });
}


                //  #########     FORM ARRAY
// form:any|null = new FormGroup({
//     topics: new FormArray([])
// });  

// addTopic(topic:HTMLInputElement | any | null){
//     this.topics.push(new FormControl(topic.value));
//     topic.value='';

// }
// get topics(){
//   return this.form.get('topics') as FormArray 
// }
// removeTopic(topic:FormControl | any){
//   let index = this.topics.controls.indexOf(topic);
//   this.topics.removeAt(index);
// }


// !!!!!!!!!! FORM BUILDER

// form:any | null | undefined= new FormGroup({
//   name: new FormControl('',Validators.required),
//   contact:new FormGroup({
//     Email: new FormControl(),
//     Phone: new FormControl()
//   }),
//   topics: new FormArray([])
// });  


//  Another APPROACH of top 
// form;
// constructor(fb: FormBuilder) {
//   this.form = fb.group({
//     name: ['',Validators.required],
//     contact:fb.group({
//       Email:[],
//       phone: []
//     }),
//     topics: fb.array([])
//   });
// }

}
