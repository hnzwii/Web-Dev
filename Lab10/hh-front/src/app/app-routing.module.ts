import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CompanyComponent } from "./components/company/company.component";
import { VacancyComponent } from "./components/vacancy/vacancy.component";

const routes: Routes = [
  { path: "", component: CompanyComponent },
  { path: "companies/:id/vacancies", component: VacancyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
