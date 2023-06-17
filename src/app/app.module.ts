import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaunchscreenComponent } from './launchscreen/launchscreen.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { BlackjackComponent } from './blackjack/blackjack.component';

@NgModule({
  declarations: [
    AppComponent,
    LaunchscreenComponent,
    HomeComponent,
    MenuComponent,
    BlackjackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
