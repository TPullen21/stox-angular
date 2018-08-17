import { Component, OnInit } from '@angular/core';

import { StockService } from '../_services/stock.service';
import { Stocks } from '../_models/stocks';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  stocksArray: string[] = ['TSLA', 'AAPL'];
  stocks: Stocks;

  constructor(private stockService: StockService) { }

  ngOnInit() {
    console.log('hello');
    this.getStocks();
  }

  getStocks() {
    this.stockService.getStocks(this.stocksArray)
    .subscribe(res => {
      this.stocks = res;
    });
  }

}
