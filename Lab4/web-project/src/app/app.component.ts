import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "web-project";
  // data = {};
  // constructor(private http: HttpClient) {
  //   this.http.get("http://localhost:3000/products").subscribe((data) => {
  //     this.data = data;
  //   });
  // }
}
