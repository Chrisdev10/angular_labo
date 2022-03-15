import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MastermindComponent } from './component/mastermind/mastermind.component';
import { ColorPickerComponent } from './component/mastermind/game-component/color-picker/color-picker.component';
import { SamplerComponent } from './component/mastermind/game-component/sampler/sampler.component';
import { HistoryComponent } from './component/mastermind/game-component/history/history.component';
import { ColorcheckerDirective } from './component/mastermind/game-component/history/colorchecker.directive';
import { MainComponent } from './component/main/main.component';
import { AcceuilComponent } from './component/main/acceuil/acceuil.component';
import { FormsModule } from '@angular/forms';
import { FormsettingsComponent } from './component/main/formsettings/formsettings.component';
import { HttpClientModule } from '@angular/common/http';
import { StatistiqueComponent } from './component/main/statistique/statistique.component';

@NgModule({
  declarations: [
    AppComponent,
    MastermindComponent,
    ColorPickerComponent,
    SamplerComponent,
    HistoryComponent,
    ColorcheckerDirective,
    MainComponent,
    AcceuilComponent,
    FormsettingsComponent,
    StatistiqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
