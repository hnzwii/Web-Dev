import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductComponent } from "./components/product/product.component";
import { ProductsGroupComponent } from "./components/products-group/products-group.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, ProductComponent, ProductsGroupComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
