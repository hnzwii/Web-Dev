import { Component, EventEmitter, Input, Output } from "@angular/core";
import { IProduct } from "src/app/shared/product";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent {
  @Input() product!: IProduct;
  @Output() remove = new EventEmitter<number>();
  @Output() like = new EventEmitter<number>();

  removeByID() {
    this.remove.emit(this.product.id);
  }

  likeProduct() {
    this.like.emit(this.product.id);
  }
}
