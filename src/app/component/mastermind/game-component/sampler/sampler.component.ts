import { Component, Input, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { colorid } from 'src/models/colorid.model';

@Component({
  selector: 'app-sampler',
  templateUrl: './sampler.component.html',
  styleUrls: ['./sampler.component.css']
})
export class SamplerComponent implements OnInit {
  @Input() numberLeft:number = 0;
  @Input() colored?: string[];
  constructor() { }

  ngOnInit(): void {

  }
  

}
