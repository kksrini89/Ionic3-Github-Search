import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/Observable/throw';

import { User } from '../models/user.interface';
import { Repository } from '../models/repository.interface';
// import { USER_LIST } from '../mocks/user.mocks';
// import { REPOSITORY_LIST } from '../mocks/repository.mocks';

@Injectable()
export class GithubService {

  private baseUrl: string = 'http://api.github.com/users';
  private reposUrl: string = 'repos';

  constructor(private http: Http) {
    console.log('Hello GithubService Provider');
  }

  getUerInformation(username: string): Observable<User> {
    return this.http.get(`${this.baseUrl}/${username}`)
      .map(this.extractData)
      .catch(this.handleError)
  }

  getRepositoryInformation(username: string): Observable<Repository[]> {
    return this.http.get(`${this.baseUrl}/${username}/${this.reposUrl}`)
      .map(this.extractData)
      .catch(this.handleError)
  }

  // mockGetRepositoryInformation(username: string): Observable<Repository[]> {
  //   return Observable.of(REPOSITORY_LIST.filter((repo: Repository) => repo.owner.name === username));
  // }

  // mockGetUserInformation(username: string): Observable<User> {
  //   return Observable.of(USER_LIST.filter(user => user.name === username)[0]);
  // }

  private extractData(response: Response) {
    return response.json();
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error.');
  }

}
