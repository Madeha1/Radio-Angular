import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
// import cities from '../cities.json';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit {
  @Input() country :string = "";
  source :string = "";
  constructor() { }

  ngOnInit(): void {
  }

  countryStations = [
    {
      'Name' : 'Hebron',
      "Stations":[
      {
        "name": "Hebron",
        "url": "http://alhaneny.com:8056/;stream.mp3&13202692901&duration=99999&id=scplayer&autostart=true"
      },
      {
        "name": "Horeia",
        "url": "http://rs.hadara.ps:8000/;stream.mp33&13202692901&duration=99999&id=scplayer&autostart=true"
      }
    ]},
    {
      "Name": "Nablus",
      "Stations": [{
          "name": "quran-radio",
          "url": "http://www.quran-radio.org:8002/;stream.mp3&13202692901&duration=99999&id=scplayer&autostart=true"
      }]
    },
    {
      "Name": "Ramallah",
      "Stations": []
    },
    {
      "Name": "Jenin",
      "Stations": [{
          "name": "albalad",
          "url": "http://live.masterweb-ps.com:8006/;mp3"
      }]
    }
  ];
  play(station:string){
    this.source = station;
    console.log(station);
  }
}
