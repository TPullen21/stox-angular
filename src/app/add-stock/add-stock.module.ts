import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddStockComponent } from './add-stock.component';
import { AddStockRoutingModule } from './add-stock-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AddStockRoutingModule
  ],
  declarations: [AddStockComponent]
})
export class AddStockModule { }
