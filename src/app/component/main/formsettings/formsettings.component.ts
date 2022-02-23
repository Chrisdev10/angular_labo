import { Component, OnInit } from '@angular/core';
import { SampleserviceService } from 'src/app/service/sampleservice.service';

@Component({
  selector: 'app-formsettings',
  templateUrl: './formsettings.component.html',
  styleUrls: ['./formsettings.component.css']
})
export class FormsettingsComponent implements OnInit {
  numberOfTry: number = 10;
  numberOf: number = 4;
  numberOfPlayer: 'solo'| 'duo' = 'solo';
  player: number|any;
  checker: boolean = false;
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
  switchcheck(){
    this.checker = !this.checker;
  }
}
