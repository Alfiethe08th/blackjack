import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LaunchscreenComponent } from './launchscreen/launchscreen.component';
import { BlackjackComponent } from './blackjack/blackjack.component';

const routes: Routes = [
  {path:'', component: BlackjackComponent},
  // {path:'', component: LaunchscreenComponent},
  {path:'home', component: HomeComponent},
  {path:'**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
