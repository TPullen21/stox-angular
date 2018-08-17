import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { StockService } from '../_services/stock.service';
import { Stock } from '../_models/stock';

@Injectable()
export class StocksResolver implements Resolve<Stock[]> {
    stocksArray: string[] = ['TSLA', 'AAPL'];

    constructor(private stockService: StockService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Stock[]> {
        return this.stockService.getStocks(this.stocksArray)
            .pipe(
                catchError(error => {
                    return of(null);
                })
            );
    }
}
