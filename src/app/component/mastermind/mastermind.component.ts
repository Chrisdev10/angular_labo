import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';
import { forEach } from 'lodash';
import { DataStatService } from 'src/app/service/data-stat.service';
import { SampleserviceService } from 'src/app/service/sampleservice.service';
import { colorid } from 'src/models/colorid.model';
import { Stat } from 'src/models/gamestat.model';
import { SamplerComponent } from './game-component/sampler/sampler.component';

@Component({
  selector: 'app-mastermind',
  templateUrl: './mastermind.component.html',
  styleUrls: ['./mastermind.component.css']
})
export class MastermindComponent implements OnInit {
  numberOf: number = 4;
  numberOfTry: number = 10;
  TRYNBR: number = this.numberOfTry;
  colorsTab: string[] = ["red","blue","yellow","green","black","white"];
  colorToFind: string[]= []
  next: Array<string[]> = []
  player: 'solo'|'duo' = 'solo';
  winInputs: string[] = [];
  finish: boolean = false;
  win: boolean = false;

  testTab: any[] = [];
  constructor(
    private route:Router,
    private data: SampleserviceService,
    private save: DataStatService
  ) {}

  ngOnInit(): void {
   
    
    
    this.data.returnParam().subscribe(x =>{
      this.testTab.push(x)
    })
    this.colorsTab = this.colorsTab.slice(0,this.testTab[0]);
    this.numberOfTry = this.testTab[1];
    this.player = this.testTab[2];
    this.winInputs = this.data.getArraySample();
    this.initColors();
  
  }
  saveData( stat: Stat){
    const finalStat: Stat = {
      id: stat.id,
      player: stat.player,
      nb_tentative: this.TRYNBR,
      nb_restante: this.numberOfTry,
      nb_color: this.colorsTab.length,
      hasWin: this.win
    }
    this.save.addRecord(finalStat).subscribe();
    
  }

  initColors(){
    if(this.player == 'solo'){
      for(let i = 0; i < this.numberOf;i++){
        this.colorToFind.push(this.colorsTab[Math.floor(Math.random()*this.colorsTab.length)]);
      }
    }else{
      alert("p2 set colors")
    }
  }

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
  showWin(color: colorid){
    this.winInputs[color.id] = color.color;
    this.data.updateArray(color);
    
  }
  

}
