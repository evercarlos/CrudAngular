import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms' // add
import { ApiService } from '../../servicios/api/api.service'; //add
import { LoginI } from '../../modelos/login.interface';
import { ResponseI } from '../../modelos/response.interface';
import { PerfilI } from '../../modelos/perfil.interface'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
   loginFrom = new FormGroup(
     {
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
     }
   )

  constructor(private api: ApiService, private router: Router) { }

  erroStatus:boolean = false;
  errorMsj: any = '';

  ngOnInit(): void {
    this.checkLocalStogare();
  }

  checkLocalStogare(){
    if(localStorage.getItem('token')){
      this.router.navigate(['dashboard']);
    }
  }

  onLogin(form:LoginI) {
    this.api.loginByEmagil(form).subscribe(data => {
      let dataResponse:any = data;
      if(dataResponse.success) {
        localStorage.setItem('token', dataResponse.token);
        localStorage.setItem('user', JSON.stringify(dataResponse.user));
        localStorage.setItem('tokenType', dataResponse.tokenType);
        localStorage.setItem('sistemas',dataResponse.sistemas);
        this.router.navigate(['dashboard']);
      } else {
        this.erroStatus = true;
        this.errorMsj = dataResponse.message;
      }
    }, err => {
      console.log(err.error.message)
      this.erroStatus = true;
      this.errorMsj = err.error.message;
    })
  }

}
