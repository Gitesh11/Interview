import { Component, OnInit } from '@angular/core';
import {ProfileserviceService } from '../service/profileservice.service';
import 'rxjs';


@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
  allprofiles: any;
  model: any = {};
  data: any;
  id:number;
  constructor( private _service : ProfileserviceService) { }

  ngOnInit(): void {
    this.getAllProfiles();
  }
getAllProfiles(){
  this._service.getProfiles().subscribe((res) => {
    console.log(res);
    this.allprofiles = res;
  }, error =>{
    alert("get endpoint is not working");
  });
}
onSubmit(form){
  console.log(form);
  
let model ={
  "firstName":form.firstName ,
  "lastName": form.lastName,
  "technology": form.technology,
  "noofYearsExperience": form.noofYearsExperience
}
this._service.addProfiles(model).subscribe((result)=>{
  console.log(result);
  
}, error => {
  alert("Endpoint is not working");
})
}
getById(){
  this._service.getProfileById(this.id).subscribe((response)=>{
    this.data = response;
  },
  error=>{
    alert("Error while fetching the data");
  })
}
}
