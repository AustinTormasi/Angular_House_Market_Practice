import { Component } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent {
  Properties: Array<any> = [
    {
      Id: 1,
      Name: 'Birla House',
      Type: 'House',
      Price: 12000,
    },
    {
      Id: 2,
      Name: 'Erose Villa',
      Type: 'House',
      Price: 14000,
    },
    {
      Id: 3,
      Name: 'Tuttles grove ',
      Type: 'Apartament',
      Price: 1205,
    },

    {
      Id: 4,
      Name: 'Tormasi Townhome',
      Type: 'House',
      Price: 450000,
    },
    {
      Id: 5,
      Name: 'Millrun Estate',
      Type: 'House',
      Price: 1000000,
    },

    {
      Id: 6,
      Name: 'Sawmill Apartments',
      Type: 'Apartament',
      Price: 1500,
    },
    {
      Id: 7,
      Name: 'Dublin Homes',
      Type: 'Apartment',
      Price: 12000,
    },
    {
      Id: 7,
      Name: 'Birla House',
      Type: 'House',
      Price: 12000,
    },
  ];
}
