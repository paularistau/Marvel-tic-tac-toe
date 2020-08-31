import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SquareComponent } from './square/square.component';
import { BoardComponent } from './board/board.component';
import { AppRoutingModule } from './app-routing.module';
import { CharacterComponent } from './characters/character/character.component';
import { CharactersComponent } from './characters/characters.component';
import { HeroSelectComponent } from './hero-select/hero-select.component'

@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    BoardComponent,
    CharacterComponent,
    CharactersComponent,
    HeroSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
