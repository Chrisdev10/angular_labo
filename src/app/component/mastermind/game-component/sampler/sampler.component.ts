import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { interval } from 'rxjs';
import { SampleserviceService } from 'src/app/service/sampleservice.service';
import { colorid } from 'src/models/colorid.model';

@Component({
  selector: 'app-sampler',
  templateUrl: './sampler.component.html',
  styleUrls: ['./sampler.component.css']
})
export class SamplerComponent implements OnInit, OnChanges{
  @Input() numberLeft:number = 0;
  colored?: string[];

  @Output() changer: EventEmitter<string[]> = new EventEmitter();
  constructor(
    private data : SampleserviceService
  ) { }
  ngOnChanges(changes: SimpleChanges): void {
      this.changer.emit(this.colored);
  }


  ngOnInit(): void {
    this.colored = this.data.getArraySample();
  }
  

}
