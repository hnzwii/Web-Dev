import { Component } from "@angular/core";
import { ProductService } from "src/app/services/product.service";
import { IProduct } from "src/app/shared/product";

@Component({
  selector: "app-products-group",
  templateUrl: "./products-group.component.html",
  styleUrls: ["./products-group.component.scss"],
})
export class ProductsGroupComponent {
  products!: IProduct[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
