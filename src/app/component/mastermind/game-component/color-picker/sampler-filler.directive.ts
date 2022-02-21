import { Directive, ElementRef, HostListener, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Directive({
  selector: '[appSamplerFiller]'
})
export class SamplerFillerDirective implements OnInit {
  @Input('appSamplerFiller') sample?: string;
  @Output() removeBuffer: EventEmitter<boolean> = new EventEmitter();
  constructor(
    private elem: ElementRef
  ) { }
  ngOnInit(): void {
    
  }
  @HostListener('click') clickcheck(){
    if(this.sample){
      this.elem.nativeElement.style.backgroundColor = this.sample;
    }else{
      this.elem.nativeElement.style.backgroundColor = 'white';
    }
  }

  @HostListener('dblclick') remover(){
    if(this.sample){
      this.elem.nativeElement.style.backgroundColor = 'white';
      this.removeBuffer.emit(true);
    }
  }
  
}
