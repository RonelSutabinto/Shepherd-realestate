import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit{

  properties: Array<any> = [
    {
      "id":1,
      "Name":"Birla House",
      "Type":"House",
      "Price":12000
    },
    {
      "id":2,
      "Name":"Erose Villa",
      "Type":"Villa",
      "Price":12000
    },
    {
      "id":3,
      "Name":"Mark Hill",
      "Type":"Flat",
      "Price":15300
    },
    {
      "id":4,
      "Name":"Camela House",
      "Type":"House",
      "Price":11400
    },
    {
      "id":5,
      "Name":"Macro Home",
      "Type":"House",
      "Price":14300
    },
    {
      "id":6,
      "Name":"Pearl White",
      "Type":"House",
      "Price":18000
    }
  ]

  constructor(){ }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
}
