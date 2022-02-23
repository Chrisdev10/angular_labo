import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { colorid } from 'src/models/colorid.model';

@Injectable({
  providedIn: 'root'
})
export class SampleserviceService {
  numberOf: number | any;
  numberOfTry?: number;
  numberOfPlayer?: 'solo' | 'duo';
  arrayColor: string[] = ["red","blue","yellow","green","black","white"];
  constructor() { }
  setAll(numberOf:number, numberOfTry: number, numberOfPlayer: 'solo'|'duo'){
    this.numberOf = numberOf;
    this.numberOfTry = numberOfTry;
    this.numberOfPlayer = numberOfPlayer;    
  }

  returnParam():Observable<any>{
    return of(this.numberOf,this.numberOfTry,this.numberOfPlayer);
  }

  returnNumberOf(){
    return this.numberOf;
  }

  returnData():Observable<string[]>{
    return of(this.arrayColor);
  }
  
}