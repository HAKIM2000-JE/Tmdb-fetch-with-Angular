
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as  env } from  'src/environments/environment' ;
import { Observable } from 'rxjs';
import { APIResponse, Film } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  //we have to inject client dependency

  constructor(private http: HttpClient) { }


  getFilmList(
    ordering: string,
    search?: string
  ) : Observable<APIResponse<Film>>{
    let params = new HttpParams().set('ordering', ordering)
    if(search){
      params= new HttpParams().set('ordering', ordering).set('search',search)
    }
    return this.http.get<APIResponse<Film>>(`${env.BASE_URL}/films`,{
      params:params,

    })
  }


}
