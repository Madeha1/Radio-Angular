import { Component } from '@angular/core';
import {ConfigService} from '../app/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'radio';
  city = '';
  selectedStations :any;
  selectedCity:string
  isMobileResolution : boolean
  cities: any;

  constructor(private dataService : ConfigService){} 
  
  ngOnInit(): void {
    this.dataService.getCities().subscribe(d => {
      this.cities = d;
    });
  }
  onChange(event:any) {
    this.selectedCity = event.target.value;
    for(let i=0; i<this.cities.length ;i++){
      if(this.cities[i].Name === event.target.value) {
        this.selectedStations = this.cities[i]['Stations'];
      }
    }
  }
}
