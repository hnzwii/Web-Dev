import { Component, Input } from "@angular/core";
import { ProductService } from "src/app/services/product.service";
import { IProduct } from "src/app/shared/product";

@Component({
  selector: "app-products-group",
  templateUrl: "./products-group.component.html",
  styleUrls: ["./products-group.component.scss"],
})
export class ProductsGroupComponent {
  @Input() categoryID: number = 1;
  products!: IProduct[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  ngOnChanges() {
    if (this.categoryID) {
      this.productService
        .getProductsByCategory(this.categoryID)
        .subscribe((data) => {
          this.products = data;
        });
    }
  }

  removeByID(productID: number) {
    this.productService.deleteProduct(productID).subscribe(() => {
      this.products = this.products.filter((el) => el.id !== productID);
    });
  }

  likeProduct(productID: number) {
    const product = this.products.find((el) => el.id === productID);
    if (product) {
      this.productService
        .likeProduct(productID, product.likes)
        .subscribe((updatedEl) => {
          product.likes = updatedEl.likes;
        });
    }
  }
}
