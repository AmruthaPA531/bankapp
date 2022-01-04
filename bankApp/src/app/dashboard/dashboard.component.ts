import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  acno=""
  pswd=""
  amount=""

  acno1=""
  pswd1=""
  amount1=""

  depositForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })
  withdrawForm=this.fb.group({
    acno1:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd1:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amount1:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })

  constructor(private ds:DataService ,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  deposit(){
   var acno=this.depositForm.value.acno
   var pswd=this.depositForm.value.pswd
   var amount=this.depositForm.value.amount

   if(this.depositForm.valid){
    let result=this.ds.deposit(acno,pswd,amount)
    if(result){
      alert(amount+ "credited. New balance is : " + result)
    }
   }
   else{
     alert("invalid form")
   }

   
  }

 withdraw(){
  var acno1=this.depositForm.value.acno1
  var pswd1=this.depositForm.value.pswd1
  var amount1=this.depositForm.value.amount1

  if(this.withdrawForm.valid){
  let result=this.ds.withdraw(acno1,pswd1,amount1)
  if(result){
    alert(amount1+ "debited. New balance is : " + result)
  }
}
else{
  alert("invalid form")
}

   
  }

}
