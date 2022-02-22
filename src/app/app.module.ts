import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MastermindComponent } from './component/mastermind/mastermind.component';
import { ColorPickerComponent } from './component/mastermind/game-component/color-picker/color-picker.component';
import { SamplerComponent } from './component/mastermind/game-component/sampler/sampler.component';
import { HistoryComponent } from './component/mastermind/game-component/history/history.component';
import { SamplerFillerDirective } from './component/mastermind/game-component/color-picker/sampler-filler.directive';
import { ColorcheckerDirective } from './component/mastermind/game-component/history/colorchecker.directive';
import { MainComponent } from './component/main/main.component';
import { AcceuilComponent } from './component/main/acceuil/acceuil.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MastermindComponent,
    ColorPickerComponent,
    SamplerComponent,
    HistoryComponent,
    SamplerFillerDirective,
    ColorcheckerDirective,
    MainComponent,
    AcceuilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
