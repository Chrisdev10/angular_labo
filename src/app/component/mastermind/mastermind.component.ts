import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { DataStatService } from 'src/app/service/data-stat.service';
import { SampleserviceService } from 'src/app/service/sampleservice.service';
import { colorid } from 'src/models/colorid.model';
import { Stat } from 'src/models/gamestat.model';

@Component({
  selector: 'app-mastermind',
  templateUrl: './mastermind.component.html',
  styleUrls: ['./mastermind.component.css']
})
export class MastermindComponent implements OnInit {
  
  numberOfColors: number = 4;
  numberOfTry: number = 0;
  NB_CHANCE: number = this.numberOfTry;
  player: 'solo'|'duo' = 'solo';
  finish: boolean = false;
  win: boolean = false;

  // Tab Variables
  winInputs: string[] = [];
  colorsTab: string[] = ["red","blue","yellow","green","black","white"];
  colorToFind: string[]= []
  next: Array<string[]> = []
  statTab: any[] = [];
  
  constructor(
    private route:Router,
    private data: SampleserviceService,
    private save: DataStatService
  ) {}

  ngOnInit(): void {
    this.data.returnParam().subscribe(x =>{
      this.statTab.push(x)
    })
    this.colorsTab = this.colorsTab.slice(0,this.statTab[0]);
    this.numberOfTry = this.statTab[1];
    this.player = this.statTab[2];
    this.winInputs = this.data.getArraySample();
    this.initColors();
  
  }

  // Save all stats in Service
  saveData( stat: Stat){
    const finalStat: Stat = {
      id: stat.id,
      player: stat.player,
      nb_tentative: this.NB_CHANCE,
      nb_restante: this.numberOfTry,
      nb_color: this.colorsTab.length,
      hasWin: this.win
    }
    this.save.addRecord(finalStat).subscribe();
    
  }

  // Set colors to find 
  initColors(){
    if(this.player == 'solo'){
      for(let i = 0; i < this.numberOfColors;i++){
        this.colorToFind.push(this.colorsTab[Math.floor(Math.random()*this.colorsTab.length)]);
      }
    }else{
      alert("p2 set colors")
    }
  }

  /*
    If player == duo, first round is p2 turn to set colors to find
    Return win if newTry tab == ColortoFind
    Else lose if Nbr of try = 0
  */
  getNextSample(tab: string[]){
    if(this.player === 'duo' && this.colorToFind.length == 0){
      this.colorToFind = tab;
    }else{
      const newTry: string[]= [];
      tab.forEach( (x)=> newTry.push(x));
      this.next.push(newTry)
      if(_.isEqual(newTry,this.colorToFind)){
        alert("win");
        this.finish = true;
        this.win = true;
      }else{
        this.numberOfTry--;
      }
      if(this.numberOfTry==0){
        alert("lose");
        this.finish = true;
      }

    }
    
  }
  //Show win colors
  showWin(color: colorid){
    this.winInputs[color.id] = color.color;
    this.data.updateArray(color);
    
  }
  

}
