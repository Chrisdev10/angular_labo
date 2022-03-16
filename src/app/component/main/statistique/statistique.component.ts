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

  //Get all Stat Data 
  ngOnInit(): void {
    this.stat.getAll().subscribe(x => this.items = x);        
  }

  //Delete selected Data Record
  // @param: id of Stat obj
  deleteRecord(id: number){
    this.stat.deleteRecord(id).subscribe();
  }


}
