import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public service:DataService,public route:Router) { }

  ngOnInit() {
  }
  AddEmp(dataFromUI:any)
  {
    
    //let emp=dataFromUI.form.value;
      //console.log(emp);
      let stateofresult=this.service.Adddata(dataFromUI.form.value);
    stateofresult.subscribe((result)=>{
      console.log(result);
      this.route.navigate(['home']);
    });
  }
}
