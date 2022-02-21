import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  @Input() colorTab?: string[];
  colorChoosed: string|any;
  constructor() { }

  ngOnInit(): void {
    
  
  }
  getColor(colors: string){
    this.colorChoosed = colors;
  }
  
  resetColor(){
    this.colorChoosed = undefined;
  }

}
