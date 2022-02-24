import { AbstractType, Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { SampleserviceService } from 'src/app/service/sampleservice.service';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  @Input() colorTab?: string[];
  @Input() isFinish: boolean = false;
  numberOf: number = 0;
  @Input() tryLeft: number|any;
  @Input() tofind?: string[];
  gamemode?: 'solo'|'duo' = "solo";
  @Output() sample: EventEmitter<string[]> = new EventEmitter();

  tabSize!: string[];
  colorPickedBuffer: string[]|any;


  constructor(
    private data : SampleserviceService
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
  }

  resetAll(){
    this.tabSize = ["antiquewhite","antiquewhite","antiquewhite","antiquewhite"];
    
  }

  sendSample(){
    this.sample.emit(this.tabSize);
    this.resetAll();
    }

}
