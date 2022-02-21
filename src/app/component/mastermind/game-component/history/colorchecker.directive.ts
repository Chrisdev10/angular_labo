import { Directive, ElementRef, HostListener, Input, OnInit, Output } from '@angular/core';
import * as _ from 'lodash';
@Directive({
  selector: '[appColorchecker]'
})
export class ColorcheckerDirective implements OnInit {
  @Input('appColorchecker') tabToFind?: string[];
  @Input() tabInput?: string[];
  @Input() getOne:string | any;
  @Input() idOf:number | any;


  constructor(
    private elem : ElementRef
  ) { }
  ngOnInit(): void {
    
    
    if(this.tabToFind && this.tabInput){
      
      if(this.getOne == this.tabToFind[this.idOf]){        
        this.elem.nativeElement.style.backgroundColor = 'lightgreen';
      }else{
        if(_.includes(this.tabToFind, this.getOne)){
          for(let i = 0; i < this.tabToFind.length ; i++){
            if(i !== this.idOf && this.tabInput[i] !== this.tabToFind[i] && this.tabToFind[i] === this.getOne){
              this.elem.nativeElement.style.backgroundColor = 'yellow';
            }
          }          
          if(this.elem.nativeElement.style.backgroundColor !== 'yellow'){
            this.elem.nativeElement.style.backgroundColor = 'red';
          }

        }else{
          this.elem.nativeElement.style.backgroundColor = 'tomato';

        }
      }
    }
  }

}
