import { Component, OnInit } from '@angular/core';
import { SampleserviceService } from 'src/app/service/sampleservice.service';

@Component({
  selector: 'app-formsettings',
  templateUrl: './formsettings.component.html',
  styleUrls: ['./formsettings.component.css']
})
export class FormsettingsComponent implements OnInit {
  numberOfTry: number = 0;
  numberOf: number = 0;
  numberOfPlayer: 'solo'| 'duo' = 'solo';
  player: number|any;
  constructor(
    private data: SampleserviceService
  ) { }

  ngOnInit(): void {
    
    this.player = history.state;
    if(this.player.p == 2){
      this.numberOfPlayer = 'duo';
    }
  }

  onSubmit(){
    this.data.setAll(this.numberOf,this.numberOfTry,this.numberOfPlayer);
  }
}
