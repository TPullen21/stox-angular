import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Stocks } from '../_models/stocks';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  stocksArray: string[] = ['TSLA', 'AAPL'];
  stocks: Stocks;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.stocks = data['stocks'];
    });
  }

}
