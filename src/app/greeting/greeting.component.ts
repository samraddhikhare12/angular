import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {
  message:string="welcome to greeting component"

  textColor="text-color"
  textBkColor="text-bkcolor"
  
  greetingStyle =[
    this.textColor,
    this.textBkColor
  ]
  tColor: string='pink';
  tBkColor: string='yellow';
  tog: number=0;
  
  constructor() { }

  ngOnInit() {
  }
  sayGreet(event){
    console.log(event)
    this.message="GoodMorning"+event.type+" "+event.target.value
  }
 toggleColor(){
if(this.tog%2==0){
    this.tColor='pink'
    this.tBkColor='yellow'
 }
 else{
  this.tColor='brown'
  this.tBkColor='green'
    
 }
 this.tog+=1
 console.log(this.tog)
   
   
   
 }
}
