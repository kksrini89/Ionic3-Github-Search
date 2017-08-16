import { User } from './../../models/user.interface';
import { Component, Input } from '@angular/core';
// import { IonicModule } from 'ionic-angular';

@Component({
  selector: 'search-results',
  templateUrl: 'searchresults.component.html'
  // styleUrls: ['searchresults.scss']
})
export class SearchResultsComponent {

  @Input() user: User;

  constructor() {
    console.log('Hello SearchresultsComponent Component');
  }

}
