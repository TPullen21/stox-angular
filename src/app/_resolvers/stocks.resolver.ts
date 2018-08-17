import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { StockService } from '../_services/stock.service';
import { Stocks } from '../_models/stocks';

@Injectable()
export class StocksResolver implements Resolve<Stocks> {
    stocksArray: string[] = ['TSLA', 'AAPL'];

    constructor(private stockService: StockService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Stocks> {
        return this.stockService.getStocks(this.stocksArray)
            .pipe(
                catchError(error => {
                    return of(null);
                })
            );
    }
}
