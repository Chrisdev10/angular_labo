import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MastermindComponent } from './component/mastermind/mastermind.component';
import { ColorPickerComponent } from './component/mastermind/game-component/color-picker/color-picker.component';
import { SamplerComponent } from './component/mastermind/game-component/sampler/sampler.component';
import { HistoryComponent } from './component/mastermind/game-component/history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    MastermindComponent,
    ColorPickerComponent,
    SamplerComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
