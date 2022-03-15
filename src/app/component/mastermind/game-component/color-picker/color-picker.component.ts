import { AbstractType, Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { SampleserviceService } from 'src/app/service/sampleservice.service';
import { Stat } from 'src/models/gamestat.model';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  @Input() colorTab?: string[];
  @Input() isFinish: boolean = false;
  @Input() winner: boolean = false;
  numberOf: number = 0;
  @Input() tryLeft: number|any;
  @Input() tofind?: string[];
  gamemode?: 'solo'|'duo' = "solo";
  @Output() sendData: EventEmitter<Stat> = new EventEmitter();
  @Output() sample: EventEmitter<string[]> = new EventEmitter();
  pseudo: string | any;

  tabSize!: string[];
  colorPickedBuffer: string[]|any;


  constructor(
    private data : SampleserviceService,
    private router: Router
  ) {
     
   }

  ngOnInit(): void {
    this.gamemode = this.data.returnMode();
    this.initTab();
  }
  initTab(){
    this.tabSize = Array(4).fill("antiquewhite");
    this.colorPickedBuffer = Array(4).fill("antiquewhite");

  }
  getColor(colors: string){
    for(let i = 0; i < this.tabSize.length ; i++){
      if(this.tabSize[i] === 'antiquewhite'){
        this.tabSize[i] = colors;
        break;
      }
    }
    this.secureCheck();
  }

  resetAll(){
    this.tabSize = ["antiquewhite","antiquewhite","antiquewhite","antiquewhite"];
    
  }

  sendSample(){
    this.sample.emit(this.tabSize);
    this.resetAll();
  }

  secureCheck(): boolean{
    return _.some(this.tabSize, (x)=>{ return x === 'antiquewhite'});
  }
  secureCheckReset(): boolean{
    return _.some(this.tabSize, (x)=>{ return x !== 'antiquewhite'});
  }

  submitted(){
      const save: Stat = {
        id : 0,
        player: this.pseudo,
        nb_tentative: 4,
        nb_restante:2,
        nb_color: 4,
        hasWin: true
      }
      // this.sendData.emit(save);
      this.router.navigate(['/']);
  }

}
