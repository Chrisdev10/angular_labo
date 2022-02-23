import { Component, Input, OnInit } from '@angular/core';
import { colorid } from 'src/models/colorid.model';

@Component({
  selector: 'app-sampler',
  templateUrl: './sampler.component.html',
  styleUrls: ['./sampler.component.css']
})
export class SamplerComponent implements OnInit {
  @Input() numberLeft:number = 0;
  @Input() color: colorid[] | any;
  colored: string[] = ["antiquewhite","antiquewhite","antiquewhite","antiquewhite"];
  constructor() { }

  ngOnInit(): void {
    if(this.color[0]){
    this.colored[this.color[0].id] = this.color[0].color;
    
    }
    console.log(this.colored);
    
    
  }
  

}
