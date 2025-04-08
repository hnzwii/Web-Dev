import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IVacancy } from "../shared/vacancy";

@Injectable({
  providedIn: "root",
})
export class VacancyService {
  private apiUrl = "http://127.0.0.1:8000/api/vacancies";

  constructor(private http: HttpClient) {}

  getVacancies(): Observable<IVacancy[]> {
    return this.http.get<IVacancy[]>(this.apiUrl);
  }

  getVacancyById(id: number): Observable<IVacancy> {
    return this.http.get<IVacancy>(`${this.apiUrl}/${id}`);
  }

  addVacancy(vacancyData: IVacancy): Observable<IVacancy> {
    return this.http.post<IVacancy>(this.apiUrl, vacancyData);
  }

  updateVacancy(id: number, vacancyData: IVacancy): Observable<IVacancy> {
    return this.http.put<IVacancy>(`${this.apiUrl}/${id}`, vacancyData);
  }

  deleteVacancy(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getTopVacancies(): Observable<IVacancy[]> {
    return this.http.get<IVacancy[]>(`${this.apiUrl}/top_ten`);
  }
}
