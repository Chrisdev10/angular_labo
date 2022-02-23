import { Component, Input, OnInit, Output } from '@angular/core';
import { Observable, of, reduce } from 'rxjs';
import { colorid } from 'src/models/colorid.model';
import { EventEmitter } from '@angular/core';
import { SampleserviceService } from 'src/app/service/sampleservice.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  currentTab: string[]=[];
  @Input() getSample?: Array<string[]> | any;
  colorBg?: Array<string[]> | any;
  @Input() toFindColors: string[] = [];
  @Output() win: EventEmitter<colorid> = new EventEmitter();
  
  constructor(
    private data: SampleserviceService
  ) { }

  ngOnInit(): void {
   console.log(this.getSample);
   
  
  }
  winvalue(win: colorid){
    this.win.emit(win);
  }
  
}
