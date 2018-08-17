import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { StocksComponent } from './stocks.component';
import { StocksRoutingModule } from './stocks-routing.module';
import { StockService } from '../_services/stock.service';

@NgModule({
  imports: [
    CommonModule,
    StocksRoutingModule,
    HttpClientModule
  ],
  exports: [
  ],
  providers: [
    StockService
  ],
  declarations: [StocksComponent]
})
export class StocksModule { }
