import { Repository } from './../../models/repository.interface';
import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

import { GithubService } from './../../providers/github-service';
import { User } from './../../models/user.interface';

@IonicPage({
  segment: 'profile/results/:username'
})
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
    this.github.getUerInformation(this.username)
      .subscribe((data: User) => {
        this.user = data;
      });
    this.github.getRepositoryInformation(this.username)
      .subscribe((data: Repository[]) => {
        this.repositories = data
      });
    // this.github.mockGetUserInformation(this.username)
    //   .subscribe((data: User) => {
    //     // console.log(data);
    //     this.user = data;
    //   });
    // this.github.mockGetRepositoryInformation(this.username)
    //   .subscribe((data: Repository[]) =>
    //     this.repositories = data);
  }

  ionViewWillLoad() {
    this.username = this.navParams.get('username');
    if (this.username) {
      this.getUserProfileInformation();
    }
  }

}
