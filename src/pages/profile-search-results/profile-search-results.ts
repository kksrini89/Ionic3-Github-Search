import { Repository } from './../../models/repository.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { GithubService } from './../../providers/github-service';
import { User } from './../../models/user.interface';

@IonicPage({})
@Component({
  selector: 'page-profile-search-results',
  templateUrl: 'profile-search-results.html',
})
export class ProfileSearchResultsPage {
  username: string;
  user: User;
  repositories: Repository[];
  
  constructor(private github: GithubService, private navParams: NavParams) {
  }

  getUserProfileInformation(): void {
    this.github.mockGetUserInformation(this.username)
      .subscribe((data: User) => {
        // console.log(data);
        this.user = data;
      });
    this.github.mockGetRepositoryInformation(this.username)
      .subscribe((data: Repository[]) =>
        this.repositories = data);
  }

  ionViewWillLoad() {
    this.username = this.navParams.get('username');
    if (this.username) {
      this.getUserProfileInformation();
    }
  }

}
