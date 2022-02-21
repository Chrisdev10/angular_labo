import { Directive, ElementRef, HostListener, Input, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[appColorchecker]'
})
export class ColorcheckerDirective implements OnInit {
  @Input('appColorchecker') tabToFind: string[] | any;
  @Input() tabInput: string[] | any;
  @Input() getOne:string | any;
  @Input() idOf:number | any;


  constructor(
    private elem : ElementRef
  ) { }
  ngOnInit(): void {
    
    if(this.getOne == this.tabToFind[this.idOf]){
      console.log(this.getOne+"  "+this.tabToFind[this.idOf]);
      
      this.elem.nativeElement.style.backgroundColor = 'lightgreen';
    }else{
      this.elem.nativeElement.style.backgroundColor = 'tomato';

    }
  }

}
