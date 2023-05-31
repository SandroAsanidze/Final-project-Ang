import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  reactiveForm!: FormGroup;
  constructor(private _router: Router){
    this.reactiveForm = new FormGroup({
      firstname: new FormControl('',[Validators.required]),
      lastname: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.pattern("^(?=.*\d).{4,8}$")]),
    })
  }

  Submit(){
    this._router.navigate(['/main'])
  }
}
