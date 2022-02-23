import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.scss']
})
export class PipesExampleComponent implements OnInit {

  dateVar: Date = new Date();
  textUpper: string = 'some text to upper case example';
  textLower: string = 'SOME TExT TO LOWER CASE ExAMPLE';
  percentPipe: number = 1.45;
  currencyPipe: number = 356;
  decimalPipe: string = '23.45';
  str: string = 'abcdefghij';


  constructor() { }

  ngOnInit(): void {
  }

}
