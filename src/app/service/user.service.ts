import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
  }
login(email:any, password:any){
    console.log(email)
    console.log(password)
    return this.http.post(`http://localhost:3000/user/authenticate`, {
      params: {
        email: email,
        password: password
      }
    })
}
getAll(){
  return this.http.get(`http://localhost:3000/users`)
}

}
