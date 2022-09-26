import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileserviceService {

  constructor(private _http:HttpClient) { }

  getProfiles():Observable<any>
  {
   const getprofileURL =('http://180.211.100.74:5151/api/profilemaster/GetProfiles');
    return this._http.get(getprofileURL)
  }
  addProfiles(model : any):Observable<any>{
    const addUrl = 'http://180.211.100.74:5151/api/profilemaster/AddProfile';
    return this._http.post(addUrl , model)
  
  }
  getProfileById(id:number):Observable<any>{
    const url=`URL: http://180.211.100.74:5151/api/profilemaster/GetProfileById?Id=${id}`;
    return this._http.get(url);
  }
}
