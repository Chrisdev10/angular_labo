import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';
import { colorid } from 'src/models/colorid.model';
import { SamplerComponent } from './game-component/sampler/sampler.component';

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
  winInputs: string[] = [];
  constructor(
    private route:Router
  ) {}

  ngOnInit(): void {
    
    this.player = history.state;
    this.initLvl();
    this.initColors();
    for(let i = 0; i < this.numberOf ; i++){
      this.winInputs[i] = "antiquewhite"
      
    }
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
    if(this.player.p == 1){
      for(let i = 0; i < this.numberOf;i++){
        this.colorToFind.push(this.colorsTab[Math.floor(Math.random()*this.numberOf)]);
      }
    }else{
      this.colorToFind = ["red","red","red","red",]
    }
    console.log(this.colorToFind);
  }

  getNextSample(tab: string[]){
    const newTry: string[]= [];
    tab.forEach( (x)=> newTry.push(x));
    this.next.push(newTry)
    if(_.isEqual(newTry,this.colorToFind)){
      alert("win");
      this.ngOnInit();  
    }else{
      this.numberOfTry--;
    }
    if(this.numberOfTry==0){
      alert("lose");
    }
    
  }
  showWin(color: colorid){
  
    this.winInputs[color.id] = color.color;
    
  }

 

}
