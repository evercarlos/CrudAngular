import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service'
import { Router }from '@angular/router'
import { PerfilI } from 'src/app/modelos/perfil.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  perfiles:PerfilI[] = [];

  constructor(private api:ApiService,private router: Router) { }

  ngOnInit(): void {
    this.api.getAllProfile(-1, -1,"", "idPerfil%7CDESC").subscribe(data =>{
      let dat:any = data;
      this.perfiles = dat;
    }, err => {
      console.log(err);
    })
  }

  newForm(){
    this.router.navigate(['nuevo']);
  }
  dataEdit(id:number) {
    this.router.navigate(['editar', id]);
  }

}
