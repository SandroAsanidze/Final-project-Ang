import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { APIService } from 'src/app/core/api.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  signInForm:FormGroup

  constructor(private _router:Router, private _apiservice:APIService){
    this.signInForm = new FormGroup({
      username: new FormControl('mor_2314',[Validators.required]),
      password: new FormControl('83r5^_',[Validators.required])
    })
  }

  get form(){
    return this.signInForm as FormGroup
  }

  submit(){
    if(this.signInForm.valid){
      this._apiservice.signIn(this.signInForm.value).subscribe(data => {
        this._router.navigate(['/main']);
      })
    }
  }
}
