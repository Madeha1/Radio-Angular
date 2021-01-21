import { Component } from '@angular/core';
import {ConfigService} from '../app/config.service';
import {AppStateService} from '../app/app-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'radio';
  city = '';
  choosenCity :string;
  isMobileResolution : boolean
  cities: any;

  constructor(private data : ConfigService , private mobile : AppStateService){} 
  
  ngOnInit(): void {
    this.data.getCities().subscribe(d => {
      this.cities = d;
    });
    this.isMobileResolution = this.mobile.getIsMobileResolution();
  }

}