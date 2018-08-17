import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StocksComponent } from './stocks.component';
import { StocksResolver } from '../_resolvers/stocks.resolver';

const routes: Routes = [
  { path: '', component: StocksComponent, resolve: { stocks: StocksResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StocksRoutingModule { }
