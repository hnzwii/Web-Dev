import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AlbumService } from "src/app/services/album.service";
import { IAlbum } from "src/app/shared/album";

@Component({
  selector: "app-album-detail",
  templateUrl: "./album-detail.component.html",
  styleUrls: ["./album-detail.component.scss"],
})
export class AlbumDetailComponent {
  albumForm!: FormGroup;
  album!: IAlbum;
  albumId!: number;

  constructor(
    private fb: FormBuilder,
    private albumService: AlbumService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.albumId = +this.route.snapshot.paramMap.get("id")!;

    this.albumForm = this.fb.group({
      title: ["", [Validators.required, Validators.minLength(3)]],
    });

    this.albumService.getAlbumById(this.albumId).subscribe((data) => {
      this.album = data;
      this.albumForm.patchValue({ title: this.album.title });
    });
  }

  get title() {
    return this.albumForm.get("title");
  }

  onSubmit(): void {
    if (this.albumForm.valid) {
      const editedAlbum = this.albumForm.value;
      this.albumService
        .editAlbum(this.albumId, editedAlbum)
        .subscribe((editedData) => {
          console.log("Album had been updated");

          this.album = { ...this.album, ...editedData };
          this.albumForm.patchValue({ title: editedData.title });
          this.router.navigate(["/album"]);
        });
    }
  }
}
