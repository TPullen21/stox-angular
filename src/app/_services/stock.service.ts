import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Stock } from '../_models/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient) { }

  getStocks(stocksToGet: string[]): Observable<Stock[]> {
    console.log('here');
    return this.http.get<Stock[]>('https://api.iextrading.com/1.0/stock/market/batch?symbols=' +
      stocksToGet.join(',') + '&types=quote&range=1s')
      .pipe(
        map((response: any) => {
          return this.processResponse(response, stocksToGet);
        }),
        catchError(error => {
          console.log(error);
          return of(null);
        })
      );
  }

  private processResponse(response: any, stocksToGet: string[]): Stock[] {
    console.log(response);
    const stocksArray: Stock[] = [];

    stocksToGet.forEach(ticker => {
      const datum = response[ticker];
      if  (datum && datum.quote) {
        stocksArray.push({
              tickerSymbol: ticker,
              openPrice: datum.quote.close,
              latestPrice: datum.quote.latestPrice
          });
      }
    });

    const stocks: Stock[] = stocksArray;
    console.log(stocks);
    return stocks;
  }

}
