import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddStockComponent } from './add-stock.component';

const routes: Routes = [
    { path: '', component: AddStockComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddStockRoutingModule { }
