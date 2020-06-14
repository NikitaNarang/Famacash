import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GridModule, PagerModule, EditService, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule, PagerModule
  ],
  providers: [ EditService, ToolbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
