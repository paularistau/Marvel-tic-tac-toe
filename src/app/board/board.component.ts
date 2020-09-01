import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares: any[];
  xIsNext: boolean;
  winner: string;
  noWinner: boolean;
  moves: number;
  scorePlayerX: number;
  scorePlayerO: number;
  
  

  constructor() { }

  ngOnInit() {
    this.newGame();
    localStorage.setItem("scorePlayerX", "0");
    localStorage.setItem("scorePlayerO", "0");
    document.getElementById("scorePlayerX").innerHTML = localStorage.scorePlayerX;
    document.getElementById("scorePlayerO").innerHTML = localStorage.scorePlayerO;
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
    this.noWinner = false;
    this.moves = 0;
    this.scorePlayerX = 0
    this.scorePlayerO = 0
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx: number) {
    if (!this.squares[idx] && !this.winner && !this.noWinner) {
      this.squares.splice(idx, 1, this.player)
      this.moves = this.moves + 1;

      console.log('MOVES', this.moves)
      if(this.moves <= 9){
        this.xIsNext = !this.xIsNext;
      }
      if(this.moves == 9 && !this.winner){
        this.noWinner = true
      }
    }
    this.winner = this.calculateWinner()

    if(this.winner == 'X' && !this.noWinner){
      var scorePlayerX = (parseInt(localStorage.getItem('scorePlayerX'))+1); 
      localStorage.setItem("scorePlayerX", scorePlayerX.toString());
      console.log(scorePlayerX);
    }
    if(this.winner == 'O' && !this.noWinner){
      var scorePlayerO = (parseInt(localStorage.getItem('scorePlayerO'))+1);
      localStorage.setItem("scorePlayerO", scorePlayerO.toString());
      console.log(scorePlayerO);
    }

    document.getElementById("scorePlayerX").innerHTML = '  ' + localStorage.scorePlayerX;
    document.getElementById("scorePlayerO").innerHTML = '  ' + localStorage.scorePlayerO;
    
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }

    }
    return null;
  }



}
