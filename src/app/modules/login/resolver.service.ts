import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { GroupService } from './group.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
=======
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { GroupService } from './group.service';
import { Group } from '../core/models/group-interface';
>>>>>>> 5ba5b19c2fc214f98972e56b2a87d03987a362e5

@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<Group[]> {
<<<<<<< HEAD

  constructor(
    private groupService: GroupService,
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Group[]> {
    return this.groupService.getGroups();
  }
}

interface Group {
  id: string;
  value: string;
  active: boolean;
}
=======
  constructor(
    private groupService: GroupService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Group[]> {
    return this.groupService.getGroups();
  }
}
>>>>>>> 5ba5b19c2fc214f98972e56b2a87d03987a362e5
