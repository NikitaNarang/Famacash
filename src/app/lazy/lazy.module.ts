import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule, PagerModule, EditService, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { LazyRoutingModule } from './lazy-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    LazyRoutingModule, GridModule, PagerModule
  ],
  providers:[EditService, ToolbarService]
})
export class LazyModule { }
