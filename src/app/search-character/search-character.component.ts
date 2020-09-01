import { Component, OnInit } from '@angular/core';
import { CharactersApiService } from '../characters/character/shared/characters-api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-character',
  templateUrl: './search-character.component.html',
  styleUrls: ['./search-character.component.scss']
})
export class SearchCharacterComponent implements OnInit {
 
  keyword = 'Player';

  data: any;
  errorMsg: string;
  isLoadingResult: boolean;
  playerXHero: String;
  playerOHero: String;

  constructor(
    private http: HttpClient
  ) { }
  

  ngOnInit() {
    this.playerXHero = null
    this.playerXHero = null
  }

  getServerResponse(event) {

    this.isLoadingResult = true;

    this.http.get("http://www.omdbapi.com/?apikey=[YOUR_API_KEY]&s=" + event)
      .subscribe(data => {
        if (data['Search'] == undefined) {
          this.data = [];
          this.errorMsg = data['Error'];
        } else {
          this.data = data['Search'];
        }

        this.isLoadingResult = false;
      });
  }
  
  searchCleared() {
    console.log('searchCleared');
    this.data = [];
  }

  selectEvent(item) {
    // do something with selected item
  }
 
  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  onFocused(e){
    // do something when input is focused
  }

  
}

