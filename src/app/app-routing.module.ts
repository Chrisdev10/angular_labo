import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './component/main/acceuil/acceuil.component';
import { MainComponent } from './component/main/main.component';
import { MastermindComponent } from './component/mastermind/mastermind.component';

const routes: Routes = [
  { path:'',component:AcceuilComponent},
  { path:'mastermind', component:MastermindComponent},
  { path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
