import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { CompanyService } from "src/app/services/company.service";
import { ICompany } from "src/app/shared/company";

@Component({
  selector: "app-company",
  templateUrl: "./company.component.html",
  styleUrls: ["./company.component.scss"],
})
export class CompanyComponent {
  companies: ICompany[] = [];

  constructor(private companyService: CompanyService, private router: Router) {}

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe((data) => {
      this.companies = data;
    });
  }

  openVacancies(companyId: number): void {
    this.router.navigate(["/companies", companyId, "vacancies"]);
  }
}
