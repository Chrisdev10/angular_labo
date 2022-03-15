import { Component, OnInit } from '@angular/core';
import { DataStatService } from 'src/app/service/data-stat.service';
import { Stat } from 'src/models/gamestat.model';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {
  items: Stat[] = [];
  constructor(
    private stat: DataStatService
  ) { }

  ngOnInit(): void {
    this.stat.getAll().subscribe(x => this.items = x);    
    
    
  }
  deleteRecord(id: number){
    this.stat.deleteRecord(id).subscribe();
  }


}
