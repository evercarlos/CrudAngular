import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PerfilI } from 'src/app/modelos/perfil.interface';
import { ResponseI } from 'src/app/modelos/response.interface';
import { AlertasService } from 'src/app/servicios/alertas/alertas.service';
import { ApiService } from '../../servicios/api/api.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  constructor(private router:Router, private api: ApiService, private alert: AlertasService) { }

  newForm = new FormGroup(
    {
      idPerfil: new FormControl(0),
      descripcion: new FormControl(''),
      estado: new FormControl(true),
      //token: new FormControl(''),
    }
  );

  ngOnInit(): void {
    // para agregar un atributo por ts
    /*Çthis.newForm.patchValue({
      'token': 'sddfdfdfdfdf'
    })*/
  }

  saveForm(form: PerfilI){
    this.api.postProfile(form).subscribe(response => {
      let resp:ResponseI = response;
      if(resp.success){
        this.alert.showSuccess('Guardado correctamente', 'Hecho');
      }
    });
  }

  close() {
    this.router.navigate(['dashboard']);
  }


}
