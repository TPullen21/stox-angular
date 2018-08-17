import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StocksComponent } from './stocks.component';
import { StocksRoutingModule } from './stocks-routing.module';

@NgModule({
  imports: [
    CommonModule,
    StocksRoutingModule
  ],
  declarations: [StocksComponent]
})
export class StocksModule { }
