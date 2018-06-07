import { Injectable } from '@angular/core';
import { Person } from './person';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  people: Person[] = [
    {
      id: 1,
      firstName: 'Bill',
      lastName: 'Cipher',
      dateOfBirth: new Date('01/01/1990')
    },
    {
      id: 2,
      firstName: 'Dipper',
      lastName: 'Pines',
      dateOfBirth: new Date('04/05/1995')
    },
    {
      id: 3,
      firstName: 'Danny',
      lastName: 'Fenton',
      dateOfBirth: new Date('03/21/1993')
    }
  ];

  getPeople(peopleOfInterest?: Person): Observable<Person[]>{
    if (peopleOfInterest !== undefined) {
      // return a list of people based on the given parameter peopleOfInterest
      // filter results by first and last name
      let peopleResults: Person[] = [];

      for (let p of this.people) {
        if (peopleOfInterest.firstName.toLowerCase() === p.firstName.toLowerCase()) {
          peopleResults.push(p);
        }
        else if (peopleOfInterest.lastName.toLowerCase() === p.lastName.toLowerCase()) {
          peopleResults.push(p);
        }
      }
    }
    return of(this.peopleResults);
  };

  constructor() { }
}
