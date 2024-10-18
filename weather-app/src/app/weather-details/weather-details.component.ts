import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent {

  constructor(private httpClient: HttpClient){

  }

  temp:any=undefined;
  humidity:any = undefined;
  city='';
  baseWeatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=';

  urlSuffix = "&units=metric&APPID=aeb5f03a2edf1f30f04a0300da7e7e6c";

  getWeather(){
    this.httpClient.get(this.baseWeatherURL+this.city+this.urlSuffix).subscribe((response:any)=>{
      console.log(response);
      this.temp = response['main']['temp'];
      this.humidity = response['main']['humidity'];
    })
  }

}
