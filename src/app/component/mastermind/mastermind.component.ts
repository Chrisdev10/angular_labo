import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mastermind',
  templateUrl: './mastermind.component.html',
  styleUrls: ['./mastermind.component.css']
})
export class MastermindComponent implements OnInit {
  numberOf: number = 6;
  numberOfTry: number = 0;
  colorsTab: string[] = ["red","blue","yellow","green","black","white"]
  next: Array<string[]> = []
  constructor() { }

  ngOnInit(): void {
  }

  getNextSample(tab: string[]){
    const newTry: string[]= [];
    tab.forEach( (x)=> newTry.push(x));
    this.next.push(newTry)
  }

}
