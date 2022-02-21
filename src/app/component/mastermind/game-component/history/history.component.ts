import { Component, Input, OnInit } from '@angular/core';
import { Observable, of, reduce } from 'rxjs';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  currentTab: string[]=[];
  @Input() getSample?: Array<string[]> | any;
  @Input() toFindColors: string[] = [];
  constructor() { }

  ngOnInit(): void {
   
   
  }
  getBg(id:number): string{
    console.log(this.getSample);
    return 'red'
  }

 

}
