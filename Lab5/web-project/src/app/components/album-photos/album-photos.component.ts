import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PhotoService } from "src/app/services/photo.service";
import { IPhoto } from "src/app/shared/photo";

@Component({
  selector: "app-album-photos",
  templateUrl: "./album-photos.component.html",
  styleUrls: ["./album-photos.component.scss"],
})
export class AlbumPhotosComponent {
  photos!: IPhoto[];
  albumId!: number;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService,
    private router: Router
  ) {}

  getPhotos(): void {
    this.photoService.getPhotosAlbumId(this.albumId).subscribe((data) => {
      this.photos = data;
    });
  }

  ngOnInit(): void {
    this.albumId = +this.route.snapshot.paramMap.get("id")!;
    this.getPhotos();
  }

  goBack(): void {
    this.router.navigate([`/albums/${this.albumId}`]);
  }
}
