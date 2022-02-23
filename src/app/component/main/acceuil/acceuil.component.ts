import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
  level: string|any;
  numberOf: number = 0;
  colorsTab: string[] = ["red","blue","yellow","green","black","white"];
  colorsChosed: string[]= [];
  constructor() { }

  ngOnInit(): void {
  }

  numberPastille(){
    switch(this.level){
      case 'easy': 
        this.numberOf = 4
        break;
      case 'medium': 
        this.numberOf = 5
        break;
      case 'hard': 
        this.numberOf = 6
        break;
      default: this.numberOf = 4;
  }

}
}
