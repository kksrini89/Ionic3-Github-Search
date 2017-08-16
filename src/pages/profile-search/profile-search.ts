import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

@IonicPage({})
@Component({
  selector: 'page-profile-search',
  templateUrl: 'profile-search.html',
})
export class ProfileSearchPage {
  username: string;
  constructor(private navCtrl: NavController, private navParams: NavParams) {
  }

  getUserInformation(): void {
    this.navCtrl.push('ProfileSearchResultsPage', {
      username: this.username
    });
  }

}
