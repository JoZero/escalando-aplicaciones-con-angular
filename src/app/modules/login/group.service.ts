import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

<<<<<<< HEAD
interface Group {
  id: string;
  value: string;
  active: boolean;
}
=======
import { Group } from '../core/models/group-interface';
>>>>>>> 5ba5b19c2fc214f98972e56b2a87d03987a362e5

@Injectable()
export class GroupService {
  groups: Group[] = [];

  constructor(
    private http: HttpClient
  ) { }

<<<<<<< HEAD
=======
  setGroups (list: Array<any>) {
    this.groups = list;
  }

  getStoredGroups () {
    return this.groups;
  }

>>>>>>> 5ba5b19c2fc214f98972e56b2a87d03987a362e5
  getGroups(): Observable<Group[]> {
    return this.http
      .get<any>(environment.endpoint.groups)
      .pipe(
        map(response => response.list as Group[])
      );
  }
}
