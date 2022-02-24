import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { interval } from 'rxjs';
import { SampleserviceService } from 'src/app/service/sampleservice.service';
import { colorid } from 'src/models/colorid.model';

@Component({
  selector: 'app-sampler',
  templateUrl: './sampler.component.html',
  styleUrls: ['./sampler.component.css']
})
export class SamplerComponent implements OnInit{
  @Input() numberLeft:number = 0;
  @Input() colored?: string[];
  constructor(
    private data : SampleserviceService
  ) { }


  ngOnInit(): void {
    this.colored = this.data.getArraySample();
  }
  

}
