import { Component, EventEmitter, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { latLng, LatLng, tileLayer } from 'leaflet';

declare var L:any;
// declare var popup:any;
@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})


export class WeatherDetailsComponent implements OnInit{

  constructor(private httpClient: HttpClient){
    // this.ngOninit();
  }

  temp:any=undefined;
  humidity:any = undefined;
  city='';
  baseWeatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=';

  urlSuffix = "&units=metric&APPID=aeb5f03a2edf1f30f04a0300da7e7e6c";
  map:any;
  popup:any;
  options:any = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 22, attribution: '...' })
    ],
    zoom: 5,
    center: latLng(31.96, -99.90)
  };

  markers:any = [
    {
      id: 1,
      name: 'Texas',
      description: 'This is a markup for texas',
      position: [ 31.96, -99.90 ]
    },
    // {
    //   id: 2,
    //   name: 'Marker name 2',
    //   description: 'descr 2',
    //   position: [ 46.000966, -123.726909 ]
    // }
  ];

  ngOnInit(){



  }

  getWeather(){
    this.httpClient.get(this.baseWeatherURL+this.city+this.urlSuffix).subscribe((response:any)=>{
      console.log(response);
      this.temp = response['main']['temp'];
      this.humidity = response['main']['humidity'];
    })
  }

}
