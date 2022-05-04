import { Injectable } from '@angular/core';
import { LoginI } from '../../modelos/login.interface';
import  {ResponseI } from '../../modelos/response.interface';
import { PerfilI } from '../../modelos/perfil.interface';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = 'http://localhost:8086/gsalmacen/api'

  constructor(private http:HttpClient) { }

  loginByEmagil(form:LoginI):Observable<ResponseI>{
    let direccion = this.url + '/auth';

   return  this.http.post<ResponseI>(direccion,form);
  }

  getAllProfile(page:number, limit: number, query:string, sortBy:String):Observable<PerfilI[]>{
    let direccion = this.url+'/v1/perfil?page='+page+"&limit="+limit+"&query="+query+"&sortBy="+sortBy;
    return this.http.get<PerfilI[]>(direccion);
  }

  getProfile(idProfile:number):Observable<PerfilI>{
    console.log("idPerfilService::: "+idProfile);
    let direccion = this.url+"/v1/perfil/"+idProfile;
    return this.http.get<PerfilI>(direccion);
  }

  /*getProfile(idProfile:number){
    let direccion = this.url+"/v1/perfil/"+idProfile;

    return this.http.get(direccion).toPromise();
  }*/

  putProfile(form: PerfilI):Observable<ResponseI>{
    let direccion = this.url+"/v1/perfil";
    return this.http.put<ResponseI>(direccion, form);
  }

  postProfile(form: PerfilI):Observable<ResponseI>{
    let direccion = this.url+"/v1/perfil";
    return this.http.post<ResponseI>(direccion, form);
  }

  deleteProfile(form:PerfilI):Observable<ResponseI>{
    let direccion = this.url+"/v1/perfil/"+form.idPerfil;
    return this.http.delete<ResponseI>(direccion);
  }
  /*deleteProfile(form:PerfilI):Observable<ResponseI>{
    let direccion = this.url+"/v1/perfil";
    let Options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      }),
      body:form
    }
    return this.http.delete<ResponseI>(direccion, Options);
  }*/

}
