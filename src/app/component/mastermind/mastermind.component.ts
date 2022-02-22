import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mastermind',
  templateUrl: './mastermind.component.html',
  styleUrls: ['./mastermind.component.css']
})
export class MastermindComponent implements OnInit {
  numberOf: number = 0;
  valueRoute?: { [k: string]: any; };
  numberOfTry: number = 10;
  colorsTab: string[] = ["red","blue","yellow","green","black","white"];
  colorToFind: string[]= []
  next: Array<string[]> = []
  player: number|any;
  constructor() {}

  ngOnInit(): void {
    this.player = history.state;
    console.log(this.player);
    this.initLvl();
    this.initColors();

  }

  initLvl(){
    switch(this.player.lvl){
      case 'easy': 
        this.numberOf = 4
        break;
      case 'medium': 
        this.numberOf = 5
        break;
      case 'hard': 
        this.numberOf = 6
        break;
      default: this.numberOf = 4;

    }
  }

  initColors(){
    for(let i = 0; i < this.numberOf;i++){
      this.colorToFind.push(this.colorsTab[Math.floor(Math.random()*this.numberOf)]);
    }
    console.log(this.colorToFind);
  }

  getNextSample(tab: string[]){
    const newTry: string[]= [];
    tab.forEach( (x)=> newTry.push(x));
    this.next.push(newTry)
    
  }

 

}
