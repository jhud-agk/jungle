import { Component } from '@angular/core';

@Component({
  templateUrl: 'app/home/home.component.html',
  styleUrls: ['app/home/home.component.css']
})
export class HomeComponent {
	message ='enjoy free streaming services';
	users =[
		{id:1, artist:'One direction', album : 'made in the am',song:[' ','love you goodbye','End of Day','hey angel','Drag Me Down','perfect','temporary fix','i wanna write you a song','walking in the wind','wolves','what a feeling','olivia','never enough','if i could fly']},
		{id:2, artist:'Ed sheeran', album : ' divide'},
		{id:3, artist:'Taylor swift', album : 1989},
		{id:4, artist:'James author', album : ' Back from the edge'},
		{id:5, artist:'Passenger', album : ' whispers 2'},
		{id:6, artist:'Bruno Mars', album : ' 24k magic'}
	];

  activeUser;


  selectUser(user){
    this.activeUser = user;
    console.log(this.activeUser);
    
  }
}
