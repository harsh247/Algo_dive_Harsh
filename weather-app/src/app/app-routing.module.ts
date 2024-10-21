import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { WeatherInfoComponent } from './weather-info/weather-info.component';

const routes: Routes = [
  {
    path:'',
    component:WeatherInfoComponent
  },
  {
    path:'details',
    component:WeatherDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
