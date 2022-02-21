import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mastermind',
  templateUrl: './mastermind.component.html',
  styleUrls: ['./mastermind.component.css']
})
export class MastermindComponent implements OnInit {
  numberOf: number = 6;
  numberOfTry: number = 0;
  colorsTab: string[] = ["red","blue","yellow","green","black","white"];
  colorToFind: string[]= []
  next: Array<string[]> = []
  constructor() { }

  ngOnInit(): void {
    this.initColors();
    console.log(this.colorToFind);
    
  }

  initColors(){
    for(let i = 0; i < this.numberOf;i++){
      this.colorToFind.push(this.colorsTab[Math.floor(Math.random()*this.numberOf)]);
    }
  }

  getNextSample(tab: string[]){
    const newTry: string[]= [];
    tab.forEach( (x)=> newTry.push(x));
    this.next.push(newTry)
    
  }

 

}
