import { Injectable } from '@angular/core';
import { Person } from './person';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  people: Person[] = {
    {
      id: 1;
      firstName: 'Bill';
      lastName: 'Cipher';
      dateOfBirth: new Date('01/01/1990')
    },
    {
      id: 2;
      firstName: 'Dipper';
      lastName: 'Pines';
      dateOfBirth: new Date('04/05/1995')
    },
    {
      id: 3;
      firstName: 'Danny';
      lastName: 'Fenton';
      dateOfBirth: new Date('21/03/1993')
    }
  };

  getPeople(): Observable<Person[]>{
    return of(this.people);
  };

  constructor() { }
}
