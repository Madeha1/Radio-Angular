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
  choosenCity :string;

  cities: any;

  constructor(private data : ConfigService){} 
  
  ngOnInit(): void {
    this.data.getCities().subscribe(d => {
      this.cities = d;
    });
  }
}