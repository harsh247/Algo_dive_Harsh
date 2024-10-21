import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.scss']
})
export class WeatherInfoComponent {
  
  city!:string;
  state_code!:string;
  country_code!:string;
  temp!:any;
  humidity!:number;
  wind!:number;
  weather_desc!:string;
  icon!:string;

  display:boolean=false;

  type!:string;
  lat!:any;
  lon!:any;

  constructor(private httpClient: HttpClient){

  }

   baseWeatherURL = 'https://api.openweathermap.org/data/2.5/weather?';

   urlSuffix:string = 'APPID=aeb5f03a2edf1f30f04a0300da7e7e6c';

   getWeather(){
   
    if(this.type=='city'){
    this.httpClient.get(this.baseWeatherURL+`q=${this.city}${this.state_code?',':''}${this.state_code?this.state_code:''}${this.country_code?',':''}${this.country_code?this.country_code:''}`+'&'+this.urlSuffix).subscribe((response:any)=>{
      this.temp = response['main']['temp']-273.15;
      this.temp = Math.round(this.temp);
      this.humidity = response['main']['humidity'];
      this.weather_desc = response['weather'][0]['description'];
      this.wind = Math.floor(response['wind']['speed']*3.6);
      this.icon = response['weather'][0]['icon'];

      this.display=true;
    },error=>{
      this.display=false;
    })
    }else{
      this.httpClient.get(this.baseWeatherURL+`lat=${this.lat}`+'&'+`lon=${this.lon}`+'&'+this.urlSuffix).subscribe((response:any)=>{
        this.temp = response['main']['temp']-273.15;
        this.temp = Math.round(this.temp);
        this.humidity = response['main']['humidity'];
        this.weather_desc = response['weather'][0]['description'];
        this.wind = Math.floor(response['wind']['speed']*3.6);
        this.icon = response['weather'][0]['icon'];
  
        this.display=true;
      },error=>{
        this.display=false;
      })
    }  

   }


   changeType(event:any){
    this.type=event.value;
    this.display=false;
   }
}

