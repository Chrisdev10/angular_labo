import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private data: SampleserviceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }


  // @param: none
  // Set Settings of Game through Service 
  // Route to game
  onSubmit(){
    this.data.setAll(this.numberOf,this.numberOfTry,this.numberOfPlayer);
    this.router.navigate(['/mastermind']);
  }
  
}
