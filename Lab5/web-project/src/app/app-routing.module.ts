import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { AlbumComponent } from "./components/album/album.component";
import { AlbumDetailComponent } from "./components/album-detail/album-detail.component";
import { AlbumPhotosComponent } from "./components/album-photos/album-photos.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "album",
    component: AlbumComponent,
  },
  {
    path: "album/:id",
    component: AlbumDetailComponent,
  },
  {
    path: "album/:id/photos",
    component: AlbumPhotosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
