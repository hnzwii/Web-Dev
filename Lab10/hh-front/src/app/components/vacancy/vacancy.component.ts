import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CompanyService } from "src/app/services/company.service";
import { VacancyService } from "src/app/services/vacancy.service";
import { IVacancy } from "src/app/shared/vacancy";

@Component({
  selector: "app-vacancy",
  templateUrl: "./vacancy.component.html",
  styleUrls: ["./vacancy.component.scss"],
})
export class VacancyComponent {
  vacancies: IVacancy[] = [];
  companyId!: number;

  constructor(
    private route: ActivatedRoute,
    private vacancyService: VacancyService,
    private companyService: CompanyService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.companyId = +params["id"];
      this.companyService
        .getCompanyVacancies(this.companyId)
        .subscribe((data) => {
          this.vacancies = data.vacancies;
        });
    });
  }
}
