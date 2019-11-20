import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employees;
  constructor(public router:Router,public service:DataService) 
  {
   this.getdata();
  }
getdata()
{
  let stateofresult=this.service.Getdata();
  stateofresult.subscribe((result)=>{
    this.employees=result;
  });
}
  ngOnInit() 
  {
   
  //   this.employees=[
  //     {no:1,name:"abc",address:"pune"},
  //     {no:2,name:"xyz",address:"karad"},
  //     {no:3,name:"pqr",address:"kolhapur"}
  // ];
  }
  GoToRegister()
  {
      this.router.navigate(['register']);
  }
  Delete(number:any)
  {
    //console.log(number);
    this.service.Delete(number).subscribe((response:any)=>{
      console.log(response);
      this.getdata();
      // if(response.affectedRows>0)
      // {
      //     this.router.navigate[]
      // }
      // else
      // {

      // }
    });
  }

}
