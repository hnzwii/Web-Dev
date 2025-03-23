import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AlbumService } from "src/app/services/album.service";
import { IAlbum } from "src/app/shared/album";

@Component({
  selector: "app-album",
  templateUrl: "./album.component.html",
  styleUrls: ["./album.component.scss"],
})
export class AlbumComponent {
  albumForm!: FormGroup;
  albums!: IAlbum[];

  constructor(private fb: FormBuilder, private albumService: AlbumService) {}

  getAlbums() {
    this.albumService.getAlbums().subscribe((data) => {
      this.albums = data;
    });
  }

  ngOnInit(): void {
    this.albumForm = this.fb.group({
      title: ["", [Validators.required, Validators.minLength(3)]],
    });

    this.getAlbums();
  }

  get title() {
    return this.albumForm.get("title");
  }

  onSubmit(): void {
    if (this.albumForm.valid) {
      const userId = 1;
      const lastAlbumId =
        this.albums.length > 0
          ? Math.max(...this.albums.map((album) => +album.id))
          : 0;
      const newId = `${lastAlbumId + 1}`;

      const newAlbum: IAlbum = {
        id: newId,
        userId: userId,
        title: this.albumForm.value.title,
      };

      // const albumData = this.albumForm.value;
      this.albumService.addAlbum(newAlbum).subscribe((res) => {
        console.log("Album was created", res);
        this.albums.push(res);
        this.albumForm.reset();
      });
    }
  }

  removeById(id: number) {
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter((el) => +el.id !== id);
    });
  }
}
