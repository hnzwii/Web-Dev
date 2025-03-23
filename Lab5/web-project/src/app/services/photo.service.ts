import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IPhoto } from "../shared/photo";

@Injectable({
  providedIn: "root",
})
export class PhotoService {
  private apiUrl = "http://localhost:3000/photos";

  constructor(private http: HttpClient) {}

  getPhotosAlbumId(albumId: number): Observable<IPhoto[]> {
    return this.http.get<IPhoto[]>(`${this.apiUrl}?albumId=${albumId}`);
  }
}
