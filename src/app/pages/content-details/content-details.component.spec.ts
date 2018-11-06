import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { ContentDetailsComponent } from "./content-details.component";
import { RouterTestingModule } from "@angular/router/testing";
describe("ContentDetailsComponent", () => {
  let component: ContentDetailsComponent;
  let fixture: ComponentFixture<ContentDetailsComponent>;
  let apiResponce = null;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContentDetailsComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    apiResponce = {
      coord: { lon: 139, lat: 35 },
      sys: { country: "JP", sunrise: 1369769524, sunset: 1369821049 },
      weather: [
        { id: 804, main: "clouds", description: "overcast clouds", icon: "04n" }
      ],
      main: {
        temp: 289.5,
        humidity: 89,
        pressure: 1013,
        temp_min: 287.04,
        temp_max: 292.04
      },
      wind: { speed: 7.31, deg: 187.002 },
      rain: { "3h": 0 },
      clouds: { all: 92 },
      dt: 1369824698,
      id: 1851632,
      name: "Shuzenji",
      cod: 200
    };
  });

  it("Test get weather icon", () => {
    component.getIcon(apiResponce);
    const url = component.iconUrl;
    expect("http://localhost:4200" + url).toBe(
      "http://localhost:4200/assets/icon/04n.png"
    );
  });

  it("Test get weather detail", () => {
    component.getWeatherDetails(apiResponce);
    const newWeather = [
      component.description,
      component.temperature,
      component.humidity,
      component.windSpeed
    ];
    const result = ["overcast clouds", 289.5, 89, 7.31];
    expect(newWeather).toEqual(result);
  });
});
