import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  constructor() { }
  screen ="";
  a;
  b;
  c;
  d="";
  e="";

  ngOnInit(): void {
  }
  entervalue(value)
  {
    if((this.b=="+")||(this.b=="-")||(this.b=="*")||(this.b=="/"))
    {
      this.d=this.d+value;
      this.screen=this.screen+value;
      this.c=this.d;
    }
    else
    {
      this.screen=this.screen+value;
      this.a=this.screen;
      
    }
  }     
  condition(value)
  {
    this.screen=this.screen+value;
    this.b=value;
  }
  clear()
  {
    this.screen="";
    this.a="";
    this.b="";
    this.c="";
    this.d="";

  }
  objectArry = [];
  result()
  {
    if(this.b=="+")
    {
      this.screen=this.screen+"="+(parseInt(this.a)+parseInt(this.c)).toString();
      this.screen=(parseInt(this.screen)+parseInt(this.c)).toString();

      this.objectArry.push(parseInt(this.screen)+parseInt(this.c));
      console.log(this.objectArry)
    }
    
    if(this.b=="-")
    {
      this.screen=this.screen+"="+(parseInt(this.a)-parseInt(this.c)).toString();
      this.screen=(parseInt(this.screen)-parseInt(this.c)).toString();
     
    }
    if(this.b=="*")
    {
      this.screen=this.screen+"="+(parseInt(this.a)*parseInt(this.c)).toString();
      this.screen=(parseInt(this.screen)*parseInt(this.c)).toString();
    }

    if(this.b=="/")
    {
      this.screen=this.screen+"="+(parseInt(this.a)/parseInt(this.c)).toString();
      this.screen=(parseInt(this.screen)/parseInt(this.c)).toString();
    }

  }

 

  

}
