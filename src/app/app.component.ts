import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'radio';
  country = '';
  choosenCountry :string;

  countries=[
    'Hebron',
    'Nablus',
    'Ramallah',
    'Jenin'
  ]
}
