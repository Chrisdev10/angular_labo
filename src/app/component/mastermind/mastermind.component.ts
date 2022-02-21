import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mastermind',
  templateUrl: './mastermind.component.html',
  styleUrls: ['./mastermind.component.css']
})
export class MastermindComponent implements OnInit {
  colorsTab: string[] = ["red","blue","yellow","green","black","white"]
  constructor() { }

  ngOnInit(): void {
  }

}
