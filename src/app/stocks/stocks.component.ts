import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Stock } from '../_models/stock';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  stocksArray: string[] = ['TSLA', 'AAPL'];
  stocks: Stock[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.stocks = data['stocks'];
    });
  }

}
