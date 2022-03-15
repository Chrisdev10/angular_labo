import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterGuardGuard } from './component/guard/master-guard.guard';
import { AcceuilComponent } from './component/main/acceuil/acceuil.component';
import { FormsettingsComponent } from './component/main/formsettings/formsettings.component';
import { MainComponent } from './component/main/main.component';
import { StatistiqueComponent } from './component/main/statistique/statistique.component';
import { MastermindComponent } from './component/mastermind/mastermind.component';

const routes: Routes = [
  { path:'',redirectTo:'acceuil', pathMatch:'full'},
  { path:'acceuil',component: AcceuilComponent},
  { path:'mastermind', component:MastermindComponent, canActivate: [MasterGuardGuard]},
  { path:'settings', component:FormsettingsComponent},
  { path:"statistique", component: StatistiqueComponent },
  { path:'**', redirectTo:'acceuil'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
