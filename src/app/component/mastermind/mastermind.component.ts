import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mastermind',
  templateUrl: './mastermind.component.html',
  styleUrls: ['./mastermind.component.css']
})
export class MastermindComponent implements OnInit {
  numberOf: number = 5;
  numberOfTry: number = 0;
  colorsTab: string[] = ["red","blue","yellow","green","black","white"]
  next?: Array<string[]>;
  constructor() { }

  ngOnInit(): void {
  }

  getNextSample(tab: string[]){
    if(this.next){
      this.next.push(tab);
      console.log(this.next);
    }else{
      this.next = Array(0);
      this.next.push(tab);
      console.log(this.next);
    }
    
    
    
  }

}
