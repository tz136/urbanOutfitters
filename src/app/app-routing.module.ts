import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ErrorComponent } from "./pages/error/error.component";
import { HomeComponent } from "./pages/home/home.component";
import { ContentDetailsComponent } from "./pages/content-details/content-details.component";
import { ThanksComponent } from "./pages/thanks/thanks.component";

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "content-details/:lat/:lng", component: ContentDetailsComponent },
  { path: "thanks", component: ThanksComponent },
  { path: "**", component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
