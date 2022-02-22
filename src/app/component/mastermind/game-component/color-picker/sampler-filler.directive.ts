import { Directive, ElementRef, HostListener, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Directive({
  selector: '[appSamplerFiller]'
})
export class SamplerFillerDirective implements OnInit {
  @Input('appSamplerFiller') sample?: string;
  @Input()index: number|any;

  @Output() removeBuffer: EventEmitter<boolean> = new EventEmitter();
  @Output() getNewColors: EventEmitter<string> = new EventEmitter();

  savedColors: string[]= [];

  constructor(
    private elem: ElementRef
  ) { }
  ngOnInit(): void {
  }
  @HostListener('click') clickcheck(){
    console.log(this.index + " "+ this.savedColors);
    this.savedColors
    
    if(this.sample){
      this.savedColors[this.index] = this.sample;
      this.elem.nativeElement.style.backgroundColor = this.savedColors[this.index]
      this.getNewColors.emit(this.sample);
      this.removeBuffer.emit(true);
    }
  }

  @HostListener('dblclick') remover(){
  
    if(this.savedColors[this.index] !== 'antiquewhite'){
      this.savedColors[this.index] = 'antiquewhite'
      this.elem.nativeElement.style.backgroundColor = this.savedColors[this.index];
      this.removeBuffer.emit(true);
      this.getNewColors.emit('antiquewhite');
    }
    
  }
  
}
