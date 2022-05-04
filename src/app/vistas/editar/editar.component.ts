import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PerfilI } from '../../modelos/perfil.interface';
import { ResponseI } from '../../modelos/response.interface';
import { ApiService } from '../../servicios/api/api.service';
import { AlertasService } from '../../servicios/alertas/alertas.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private activeRouter: ActivatedRoute, private router: Router, private api:ApiService, private alerta:AlertasService) { }

  datosPerfil!:PerfilI;
  editForm = new FormGroup(
    {
      idPerfil: new FormControl(''),
      descripcion: new FormControl(''),
      estado: new FormControl(true),
    }
  );

  ngOnInit(): void {
    const idProfile = Number(this.activeRouter.snapshot.paramMap.get('id'));    
    this.api.getProfile(idProfile).subscribe(response => {
      this.datosPerfil = response.data;
      this.editForm.setValue({
        'idPerfil' : this.datosPerfil.idPerfil,
        'descripcion' : this.datosPerfil.descripcion,
        'estado' : this.datosPerfil.estado,
      });
    })
  }

  saveForm(data:PerfilI){
    this.api.putProfile(data).subscribe(response => {
      let resp:ResponseI = response;
      if(resp.success){
        this.alerta.showSuccess('Datos guardo correctamente', 'Hecho');
        this.router.navigate(['dashboard']);
      }
    });
  }
  eliminar(){
    let datos: PerfilI = this.editForm.value;
    this.api.deleteProfile(datos).subscribe(resp => {
      console.log(resp);

    })
  }

  close() {
    this.router.navigate(['dashboard']);
  }

}
