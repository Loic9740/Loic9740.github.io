import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from "./app.component";
import { WeatherComponent } from "./weather/weather.component";
import { RouterModule } from "@angular/router";
import { allAppRoutes } from "./routes";
import { ReactiveFormsModule } from "@angular/forms";
import { ApixuService } from "./apixu.service";

@NgModule({
  declarations: [AppComponent, WeatherComponent],
  providers: [ApixuService],
  imports:
   [
    BrowserModule,
    RouterModule.forRoot(allAppRoutes),
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}