import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage({
  segment: 'profile-search'
})
@Component({
  selector: 'page-profile-search',
  templateUrl: 'profile-search.html',
})
export class ProfileSearchPage {
  username: string;
  constructor(private navCtrl: NavController) {
  }

  getUserInformation(): void {
    this.navCtrl.push('ProfileSearchResultsPage', {
      username: this.username
    });
  }

}
