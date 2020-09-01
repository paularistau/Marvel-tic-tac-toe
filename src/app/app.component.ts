import { Component } from '@angular/core';
import { CharactersApiService} from './characters/character/shared/characters-api.service';
import {Characters} from './classes/Characters'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'tic-tac-toe';
  startNewGame: Boolean = false

  constructor(private _CharactersApiService: CharactersApiService){
  }
  lstCharacters: Characters[];

  ngOnInit(){
    this._CharactersApiService.getAllCharacters()
    .subscribe(
      data =>
      {
        this.lstCharacters = data;
      }
    )
  }

  startGame(){
    this.startNewGame = true
    console.log('startNewGame game', this.startNewGame)
  }
}
