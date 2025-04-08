import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CompanyComponent } from "./components/company/company.component";
import { VacancyComponent } from "./components/vacancy/vacancy.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, CompanyComponent, VacancyComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
