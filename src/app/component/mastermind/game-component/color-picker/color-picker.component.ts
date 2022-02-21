import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  @Input() colorTab?: string[];
  @Input() numberOf?: number;

  @Output() sample: EventEmitter<string[]> = new EventEmitter();

  tabSize: string[]|any;
  colorPickedBuffer: string[]|any;
  colorChoosed: string|any;
  constructor() { }

  ngOnInit(): void {
    this.tabSize = Array(this.numberOf).fill("white").map((x,i)=> x);
    this.colorPickedBuffer = Array(this.numberOf).fill("white").map((x,i)=> x);
    
  }
  getColor(colors: string){
    this.colorChoosed = colors; 
  }
  
  resetColor(){
    this.colorChoosed = undefined;
  }

  saveChange(colors: string, id:number){
    this.colorPickedBuffer[id] = colors;
    console.log(this.colorPickedBuffer);
    console.log(id);
    
  }

  sendSample(){
    this.sample.emit(this.colorPickedBuffer);
  }

}
