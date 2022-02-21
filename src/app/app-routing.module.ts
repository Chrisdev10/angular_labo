import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MastermindComponent } from './component/mastermind/mastermind.component';

const routes: Routes = [
  { path:'',component:MastermindComponent},
  { path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
