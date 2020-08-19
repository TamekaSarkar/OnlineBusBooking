import { Component, OnInit } from '@angular/core';
import { SelectBusService } from '../services/selectBus.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Journey_Route } from '../models/route.model';

@Component({
  selector: '.select-bus',
  templateUrl: './select-bus.component.html',
  styleUrls: ['./select-bus.component.css']
})
export class SelectBusComponent implements OnInit {

  
  pnumber=1;
  
  place:Place[]=[];
  
    constructor(
      private BusService:SelectBusService,
      private router:Router
    ) {
     this.place[0]=new Place()
     }
  
    ngOnInit() {
   
    }
  
  
  
    SearchBus(form: NgForm) {
      let leaving_form = form.value.leaving_form;
      let destination;
     
    
      this.place.filter(iteam=>{
        if(iteam.key==form.value.going_to){
          destination=iteam.value
        }
      })
  
      let date = form.value.depart_date;
      let route:Journey_Route = {
        leaving_form: leaving_form,
        going_to: destination,
        date:date
      }
      localStorage.setItem("route", JSON.stringify(route))
      let routeId = form.value.going_to;
      this.BusService.getRoueId(routeId);
      this.router.navigate(['search']);
    }
  
    leave(e){
   
      let leavingfrom=e.target.value;
      console.log(leavingfrom)
      if(leavingfrom=='hosuton'){
        this.place= [
          {key:'1109001', value:'Austin'} ,        
          {key:'1109004', value:'Plano'} ,
          {key:'1109005', value:'League City'}
    
   
        ]
    }
    else if(leavingfrom=='dal'){
      this.place= [
        {key:'2209002', value:'Plano'} ,
        {key:'2209001', value:'Austin'} ,
        {key:'2209003', value:'San Antonio'} 

       
  
      ]
    }
    else if(leavingfrom=='austin'){
      this.place= [
        {key:'3309003', value:'Houston'} ,
        {key:'3309001', value:'Plano'} ,
        {key:'3309002', value:'League City'} ,
     
      ]
    }
    

  
  }
  
  
  }
  export class Place {
    key:string;
    value:string;
  }
