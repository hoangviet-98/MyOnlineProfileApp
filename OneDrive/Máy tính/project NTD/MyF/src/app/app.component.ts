import { Component } from '@angular/core';

@Component({
  selector: 'my-profile',
  template: `
  <div id = "container">
    <h1> My Profile </h1>
  <h1>Hoang The Viet</h1>
  <img src = {{person.avatar}}/>
  <h2>My name is {{person.firstname}} {{person.lastname}}</h2>
  <h2>{{person.age}}</h2>
  <h2>Address</h2> 
  <ul>
    <li> Street : {{person.address.street}}</li>
    <li> City : {{person.address.city}}</li>
    <li> Country : {{person.address.country}}</li>
    </ul>
    <h2> Person </h2>
<ul>
     <li *ngFor="let item of person.friends">
       {{item.name}}, {{item.age}}       
      </li>
  </ul>
</div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyF';

  person = {
    firstname : 'Viet',
    lastname: 'Hoang',
    age: '22',
    avatar: '\assets/5f53b45c72738b2dd262.jpg',
    address:{
      street : 'Ha Dong',
      city: ' Ha Noi',
      country: 'Viet Nam'
    },
    
    friends:[
      {name: 'Huong' , age: 20},
      {name: 'Ha' , age: 22},
      {name: 'Hung' , age: 24}
    ]

  }
}
