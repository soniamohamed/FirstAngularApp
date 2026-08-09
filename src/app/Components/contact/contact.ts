import { Component, inject, OnInit } from '@angular/core';
import { MyBtn } from "../my-btn/my-btn";
import { ServiceData } from '../../Services/service-data';


@Component({
  selector: 'app-contact',
  imports: [MyBtn],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  friendsContact:string[]=['ahmed','mohamed','amr'];
  // constractor(serviceData:ServiceData)
  // {
  //  this.friendsContact= serviceData.friends; // constructor injection
  // }
  private readonly serviceData =inject(ServiceData);
  constractor()
  {
    this.friendsContact= this.serviceData.friends; 
  }
}
