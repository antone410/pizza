import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PizzaItemComponent } from './components/product-list/pizza-item/pizza-item.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { DrinkItemComponent } from './components/product-list/drink-item/drink-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaItemComponent,
    ProductListComponent,
    DrinkItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
