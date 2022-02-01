import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Details } from './class/details.model';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private http:HttpClient) { }

  selectedDetail:Details;
  detail:Details[];

  postdata(obj){
    return this.http.post('http://localhost:8000/details' , obj)
  }

  getData(){
    return this.http.get('http://localhost:8000/details')
  }

  putData(id,obj){
    return this.http.put(`http://localhost:8000/details/${id}`  , obj)
  }

  deletedata(id){
    return this.http.delete(`http://localhost:8000/details/${id}`)
  }
}
