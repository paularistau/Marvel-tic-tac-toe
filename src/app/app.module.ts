import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SquareComponent } from './square/square.component';
import { BoardComponent } from './board/board.component';
import { AppRoutingModule } from './app-routing.module';
import { CharacterComponent } from './characters/character/character.component';
import { CharactersComponent } from './characters/characters.component';
import { HttpClientModule} from '@angular/common/http'
import { CharactersApiService} from './characters/character/shared/characters-api.service';
import { FormsModule} from '@angular/forms'
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ScoreComponent } from './score/score.component';
import { SearchCharacterComponent } from './search-character/search-character.component';
 
@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    BoardComponent,
    CharacterComponent,
    CharactersComponent,
    AppComponent,
    ScoreComponent,
    SearchCharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AutocompleteLibModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
       
  ],
  providers: [CharactersApiService],
  bootstrap: [AppComponent]
})

export class AppModule { }
