import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:HttpClient)
   { }
  Getdata()
  {
    return this.http.get("http://192.168.43.137:4000/employees");
  }
  Adddata(emp:any)
  {

    return this.http.post("http://192.168.43.147:4000/employees",emp);
  }
  Delete(number:any)
  {
   // console.log("in delete");
    return this.http.delete("http://192.168.43.147:4000/employees/"+ number);
  }
  getdatabyid(no)
  {
    console.log("in getdatabyid");
    return this.http.get("http://192.168.43.147:4000/employees/"+ no);
  }
}
