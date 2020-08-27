import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-square',
  template: `
      <button class="tic-tac-button">{{value}}</button>
  `,
  styles: [
    
  ]
})
export class SquareComponent {
  @Input() value: 'X' | 'O';

}
