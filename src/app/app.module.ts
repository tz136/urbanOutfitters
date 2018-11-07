//angular core module;
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";

//Third party package
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AgmCoreModule } from "@agm/core";

//cutomized components
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { ErrorComponent } from "./pages/error/error.component";
import { HomeComponent } from "./pages/home/home.component";
import { ContentDetailsComponent } from "./pages/content-details/content-details.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ErrorComponent,
    HomeComponent,
    ContentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GooglePlaceModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDRCKp-d8upp3zaad_VMfZ8D-fZhsmqsQs"
    }),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
