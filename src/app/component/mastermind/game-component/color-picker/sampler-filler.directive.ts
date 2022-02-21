import { Directive, ElementRef, HostListener, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Directive({
  selector: '[appSamplerFiller]'
})
export class SamplerFillerDirective implements OnInit {
  @Input('appSamplerFiller') sample?: string;
  @Output() removeBuffer: EventEmitter<boolean> = new EventEmitter();
  @Output() getNewColors: EventEmitter<string> = new EventEmitter();
  constructor(
    private elem: ElementRef
  ) { }
  ngOnInit(): void {
    
  }
  @HostListener('click') clickcheck(){
    if(this.sample){
      this.elem.nativeElement.style.backgroundColor = this.sample;
      this.getNewColors.emit(this.sample);
      this.removeBuffer.emit(true);
    }
  }

  @HostListener('dblclick') remover(){
  if(this.elem.nativeElement.style.backgroundColor !== 'antiquewhite'){
    this.elem.nativeElement.style.backgroundColor = 'antiquewhite';
    this.removeBuffer.emit(true);
    this.getNewColors.emit('antiquewhite');
  }
    
  }
  
}
