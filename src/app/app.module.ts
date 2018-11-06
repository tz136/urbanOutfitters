//angular core module;
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

//Third party package
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';

//cutomized components
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentDetailsComponent } from './pages/content-details/content-details.component';

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
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.wanderingCubes,
      backdropBackgroundColour: 'rgba(0,0,0,0.5)',
      backdropBorderRadius: '4px',
      primaryColour: '#432c85',
      secondaryColour: '#432c85',
      tertiaryColour: '#432c85'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
