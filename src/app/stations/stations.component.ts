import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import citiesData from '../cities.json';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit {
  @Input() country :string = "";
  source :string = "";
  countryStations: any = citiesData;
  constructor() { }

  ngOnInit(): void {
  }

  play(station:string){
    this.source = station;
  }
}
