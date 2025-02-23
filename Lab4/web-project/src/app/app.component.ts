import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { ICategory } from "./shared/category";
import { ProductService } from "./services/product.service";
import { CategoryService } from "./services/category.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "web-project";
  categories!: ICategory[];
  selectedCategory!: number;
  selectedCategoryName: string = "";

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}

  ngOnInit() {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  // selectCategory(categoryName: string) {
  //   const selectedCategory = this.categories.find(
  //     (el) => el.name === categoryName
  //   );
  //   if (selectedCategory) {
  //     this.selectedCategory = selectedCategory.id;
  //     this.selectedCategoryName = selectedCategory.name;
  //   }
  // }

  // updateCategoryName(name: string) {
  //   this.selectedCategoryName = name;
  // }

  // clearInput() {
  //   this.selectedCategoryName = "";
  // }

  selectCategory(event: Event) {
    const target = event.target as HTMLSelectElement;
    const selectedCategoryId = Number(target.value);

    if (!isNaN(selectedCategoryId)) {
      this.selectedCategory = selectedCategoryId;
    }
  }
}
