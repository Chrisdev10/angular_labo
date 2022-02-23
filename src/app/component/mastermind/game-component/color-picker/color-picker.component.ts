import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { SampleserviceService } from 'src/app/service/sampleservice.service';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  @Input() colorTab?: string[];
  numberOf: number = 0;

  @Output() sample: EventEmitter<string[]> = new EventEmitter();

  tabSize: string[]|any;
  colorPickedBuffer: string[]|any;

  colorChoosed: string|any;
  colorTabChoosed?: string[];

  constructor(
    private data: SampleserviceService
  ) {
    
   }

  ngOnInit(): void {
    
    this.numberOf = this.data.returnNumberOf();
    this.initTab(this.numberOf);
    
  }
  initTab(numb: number){
    this.tabSize = Array(4).fill("antiquewhite").map((x,i)=> x);
    console.log(this.tabSize);
    
    this.colorPickedBuffer = Array(4).fill("antiquewhite").map((x,i)=> x);
    console.log(this.colorPickedBuffer);
  }
  getColor(colors: string){
    this.colorChoosed = colors; 
  }
  
  resetColor(check:boolean){
    if(check){
      this.colorChoosed = undefined;
    }
    
  }

  resetAll(){
    this.ngOnInit();
  }

  saveChange(colors: string, id:number){
    this.colorPickedBuffer[id] = colors;    
  }

  sendSample(){
    this.sample.emit(this.colorPickedBuffer);
  }

}
