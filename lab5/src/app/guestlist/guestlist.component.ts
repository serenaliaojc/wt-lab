import { Component, OnInit } from '@angular/core';
import { PeopleService }from '../people.service';
import { Person } from '../person';

@Component({
  selector: 'app-guestlist',
  templateUrl: './guestlist.component.html',
  styleUrls: ['./guestlist.component.css']
})
export class GuestlistComponent implements OnInit {

  // searchGuest: Person = {
  //   id: 4,
  //   firstName: 'Peter',
  //   lastName: 'Parker',
  //   dateOfBirth: new Date('04/04/2001');
  // };
  searchGuest: Person = new Person();

  guests: Person[];

  constructor(private peopleService: PeopleService) { }

  getPeople(queryPerson: Person) {
    console.log("getPeople() clicked");
    this.peopleService.getPeople().subscribe(results => this.guests = results);

    if (queryPerson) {
      this.peopleService.getPeople(queryPerson).subscribe( results => this.guests = results);
    }
  }

  ngOnInit() {
    this.getPeople();
  }

}
