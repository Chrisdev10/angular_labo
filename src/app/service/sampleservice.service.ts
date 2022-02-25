import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { colorid } from 'src/models/colorid.model';

@Injectable({
  providedIn: 'root'
})
export class SampleserviceService {
  numberOf?: number | any;
  numberOfTry?: number;
  numberOfPlayer?: 'solo' | 'duo';
  arrayColor: string[] = ["red","blue","yellow","green","black","white"];
  arraySample: string[] = ["antiquewhite","antiquewhite","antiquewhite","antiquewhite"]
  passedBy: boolean = false;
  constructor() { }
  setAll(numberOf:number, numberOfTry: number, numberOfPlayer: 'solo'|'duo'){
    this.numberOf = numberOf;
    this.numberOfTry = numberOfTry;
    this.numberOfPlayer = numberOfPlayer; 
    this.passedBy = true;   
  }

  checkStart(): boolean{
    return this.passedBy;
  }

  returnParam():Observable<any>{
    return of(this.numberOf,this.numberOfTry,this.numberOfPlayer);
  }

  returnNumberOf(){
    return this.numberOf;
  }

  returnMode(){
    return this.numberOfPlayer;
  }
  returnData():Observable<string[]>{
    return of(this.arrayColor);
  }
  

  /// Sample Array Update 
  
  updateArray(color: colorid){
    this.arraySample[color.id] = color.color;
  }

  getArraySample(): string []{
    return this.arraySample;
  }
}
