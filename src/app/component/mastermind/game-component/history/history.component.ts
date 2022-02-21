import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  
  @Input() getSample?: Array<string[]>;
  
  constructor() { }

  ngOnInit(): void {
    
  }
  


}
