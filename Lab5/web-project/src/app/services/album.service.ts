import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IAlbum } from "../shared/album";

@Injectable({
  providedIn: "root",
})
export class AlbumService {
  private apiUrl = "http://localhost:3000/albums";

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<IAlbum[]> {
    return this.http.get<IAlbum[]>(this.apiUrl);
  }

  getAlbumById(id: number): Observable<IAlbum> {
    return this.http.get<IAlbum>(`${this.apiUrl}/${id}`);
  }

  addAlbum(albumData: IAlbum): Observable<any> {
    return this.http.post(this.apiUrl, albumData);
  }

  editAlbum(id: number, albumData: IAlbum): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, albumData);
  }

  deleteAlbum(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
