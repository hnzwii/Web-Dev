import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IProduct } from "../shared/product";
import { ICategory } from "../shared/category";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private apiUrl = "http://localhost:3000/products";

  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.apiUrl);
  }

  // getCategories(): Observable<ICategory[]> {
  //   return this.http.get<ICategory[]>(`${this.apiUrl}/categories`);
  // }

  getProductsByCategory(categoryID: number): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.apiUrl}?categoryID=${categoryID}`);
  }

  deleteProduct(productID: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${productID}`);
  }

  likeProduct(productId: number, likesAmount: number): Observable<IProduct> {
    return this.http.patch<IProduct>(`${this.apiUrl}/${productId}`, {
      likes: likesAmount + 1,
    });
  }
}
