import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  myOtherSnap!:FaceSnap;
  myLastSnap!:FaceSnap;
  ngOnInit() {
    this.mySnap = {
      title:'Archibald',
      description:'Mon meilleur ami depuis tout petit !',
      imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createDate: new Date(),
      snaps:0,
      localisation:"Paris"
    };
    this.myOtherSnap = {
      title:'le piment Vert',
      description:"un piment détonnant",
      imageUrl:'https://upload.wikimedia.org/wikipedia/commons/7/73/Piment_vert_d%27afrique.jpg',
      createDate:new Date(),
      snaps:0,
      localisation:"Amérique"
    };
    this.myLastSnap = {
      title:'Le piment Habanero jaune',
      description:'un piment de la famille des Habanero le plus doux de sa game',
      imageUrl:'https://upload.wikimedia.org/wikipedia/commons/1/1e/Habenero_roast.jpg',
      createDate:new Date(),
      snaps: 0,
      localisation:"Mexique",
    };
  }
}

