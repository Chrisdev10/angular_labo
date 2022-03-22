import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConnectionService } from 'src/app/service/connection.service';
import { DataStatService } from 'src/app/service/data-stat.service';
import { Stat } from 'src/models/gamestat.model';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {
  isConnected!:boolean;
  items: Stat[] = [];
  items$!: Observable<Stat[]>;
  constructor(
    private stat: DataStatService, 
    private connection : ConnectionService
  ) { }

  //Get all Stat Data 
  ngOnInit(): void {
    this.connection.$isConnected.subscribe(()=>{
      this.isConnected = this.connection.isConnectChecker();
    });
    this.stat.dataSender.subscribe(()=> this.items$ = this.stat.getAll());
  }

  //Delete selected Data Record
  // @param: id of Stat obj
  deleteRecord(id: number){
    this.stat.deleteRecord(id).subscribe();
  }


}
