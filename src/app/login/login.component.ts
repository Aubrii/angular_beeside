import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
  }

  ngOnInit(): void {
this.createFormUser()
    this.userService.getAll().subscribe((data) =>{
      console.log(data)
    })
  }
  createFormUser(){
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.form.controls['email'].value)
    console.log('get value form',this.form.getRawValue())
    if (this.form.invalid) {
      console.log('ERROR')
    }
    this.userService.login(this.form.controls['email'].value, this.form.controls['password'].value).subscribe((data)=>{
      console.log('data', data)
    })
  }


}
