import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ICompany } from "../shared/company";

@Injectable({
  providedIn: "root",
})
export class CompanyService {
  private apiUrl = "http://127.0.0.1:8000/api/companies";

  constructor(private http: HttpClient) {}

  getCompanies(): Observable<ICompany[]> {
    return this.http.get<ICompany[]>(this.apiUrl);
  }

  getCompanyById(id: number): Observable<ICompany> {
    return this.http.get<ICompany>(`${this.apiUrl}/${id}`);
  }

  addCompany(companyData: ICompany): Observable<ICompany> {
    return this.http.post<ICompany>(this.apiUrl, companyData);
  }

  updateCompany(id: number, companyData: ICompany): Observable<ICompany> {
    return this.http.put<ICompany>(`${this.apiUrl}/${id}`, companyData);
  }

  deleteCompany(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getCompanyVacancies(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}/vacancies`);
  }
}
