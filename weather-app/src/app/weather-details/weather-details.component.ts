import { Component, ElementRef, EventEmitter, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { Icon, icon, latLng, LatLng, marker, tileLayer } from 'leaflet';

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
  data:any;
  weather_desc:string='';
  baseWeatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=';

  urlSuffix = "&units=metric&APPID=aeb5f03a2edf1f30f04a0300da7e7e6c";
  map:any;
  popup:any;

 @ViewChildren ('markers') mapMarker!: any;

  options:any = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 22, attribution: '...' })
    ],
    zoom: 5,
    center: latLng(31.96, -99.90)
  };

  fitBoundsOptions:any = {
    maxZoom:8
  }

  markers:any = [
    {
      id: 1,
      name: 'Texas',
      description: 'This is a markup for texas',
      position: [ 31.96, -99.90 ]
    },
    {
      id: 2,
      name: 'Newport',
      description: 'This is a markup for Newport',
      position: [ 39.088, -84.5 ]
    },
    {
      id: 3,
      name: 'Detroit',
      description: 'This is a markup for Detroit',
      position: [ 42.38, -83.102 ]
    },
    {
      id: 4,
      name: 'Seattle',
      description: 'This is a markup for Seattle',
      position: [ 47.6211, -122.324 ]
    },
    {
      id: 5,
      name: 'San Francisco',
      description: 'This is a markup for San Francisco',
      position: [ 37.7558, -122.445 ]
    },
    {
      id: 6,
      name: 'Las Vegas',
      description: 'This is a markup for Las Vegas',
      position: [ 36.2333, -115.265 ]
    },
    {
      id: 7,
      name: 'Orlando',
      description: 'This is a markup for Orlando',
      position: [ 28.4773 , -81.337 ]
    },
    {
      id: 8,
      name: 'New Boston',
      description: 'This is a markup for New Boston',
      position: [ 33.4612, -94.4183 ]
    },
    {
      id: 9,
      name: 'Pittsburg',
      description: 'This is a markup for Pittsburg',
      position: [ 32.9996, -94.9668 ]
    },
    {
      id: 10,
      name: 'Laguna Beach',
      description: 'This is a markup for Laguna Beach',
      position: [ 30.2549, -85.9512 ]
    }
    // {
    //   id: 2,
    //   name: 'Marker name 2',
    //   description: 'descr 2',
    //   position: [ 46.000966, -123.726909 ]
    // }
  ];

  icon = {
    icon: icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 0 ],
      // specify the path here
      iconUrl: './node_modules/leaflet/dist/images/marker-icon.png',
      shadowUrl: './node_modules/leaflet/dist/images/marker-shadow.png'
   })
}

  markerElement:any;

  ngOnInit(){

    // this.data = this.markers[0];
    this.markerElement = new Array(this.markers.length);

  }

  // map:any;

  onMapReady(map:any){
    this.map = map;
  }

  ngAfterViewInit(){

    for(let i=0;i<this.markers.length;i++){
    let elemRef = this.mapMarker.filter((el:any,ind:number)=>{return i==ind});
    // console.log(elemRef);
    this.markerElement[i] = elemRef[0].nativeElement;
    // this.markerElement = this.markerElement.nativeElement;
    // console.log(this.markerElement[i]);


    let m = marker(this.markers[i].position,{
      icon: icon({
        ...Icon.Default.prototype.options,
        iconUrl: 'assets/marker-icon.png',
        iconRetinaUrl: 'assets/marker-icon-2x.png',
        shadowUrl: 'assets/marker-shadow.png'
      })
    });

    m.bindPopup(this.markerElement[i]).openPopup();
    m.addTo(this.map);
    m.openPopup();
  }
  }

  wind!:number;
  lat!:number;
  lon!:number;
  fitBounds!:any;

  getWeather(){
    this.httpClient.get(this.baseWeatherURL+this.city+this.urlSuffix).subscribe((response:any)=>{
      console.log(response);
      this.temp = response['main']['temp'];
      this.humidity = response['main']['humidity'];
      this.weather_desc = response['weather'][0]['description'];
      this.wind = Math.floor(response['wind']['speed']*3.6);
      this.lat = response['coord']['lat'];
      this.lon = response['coord']['lon'];

      let city = response['name'];

      // let elem = document.createElement('div');

      let m = marker([this.lat,this.lon ],{
        icon: icon({
          ...Icon.Default.prototype.options,
          iconUrl: 'assets/marker-icon.png',
          iconRetinaUrl: 'assets/marker-icon-2x.png',
          shadowUrl: 'assets/marker-shadow.png'
        })
      });

      m.addTo(this.map);
      this.fitBounds= [(L.latLng(this.lat-0.25,this.lon-0.4),L.latLng(this.lat+0.25,this.lon+0.4))];
      //  = this.map.fitBounds
      // this.map.setBounds();
    })
  }

}
