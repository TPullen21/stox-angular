import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { StocksComponent } from './stocks.component';
import { StocksRoutingModule } from './stocks-routing.module';
import { StockService } from '../_services/stock.service';
import { StocksResolver } from '../_resolvers/stocks.resolver';

@NgModule({
  imports: [
    CommonModule,
    StocksRoutingModule,
    HttpClientModule
  ],
  exports: [
  ],
  providers: [
    StockService,
    StocksResolver
  ],
  declarations: [StocksComponent]
})
export class StocksModule { }
