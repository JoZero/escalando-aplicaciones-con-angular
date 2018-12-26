import { Pipe, PipeTransform } from '@angular/core';
<<<<<<< HEAD
=======
import { Group } from './models/group-interface';
>>>>>>> 5ba5b19c2fc214f98972e56b2a87d03987a362e5

@Pipe({
  name: 'filterActives'
})
export class FilterActivesPipe implements PipeTransform {

  transform(groups: Group[]): Group[] {
    return groups
      .filter(group => group.active)
      .sort((groupA, groupB) => {
        if (groupA.id === groupB.id) {
          return 0;
        }
        if (groupA.id > groupB.id) {
          return 1;
        }
        return -1;
      });
  }
<<<<<<< HEAD

}

interface Group {
  id: string;
  value: string;
  active: boolean;
=======
>>>>>>> 5ba5b19c2fc214f98972e56b2a87d03987a362e5
}
