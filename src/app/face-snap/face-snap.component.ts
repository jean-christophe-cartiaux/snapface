import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

// Décorateur //
@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  isAvailable=false;
  buttonSnap!: string;
  buttonUnSnap!: string;

  ngOnInit() {

    this.buttonSnap = 'Oh Snap !';
    this.buttonUnSnap = 'Oops, UnSnap !';
  }
  onSnap() {
    this.isAvailable=false;
    this.faceSnap.snaps++;
    this.buttonSnap = 'Oh Snap !';
  }

  noSnap() {
   
    if(this.faceSnap.snaps<=1){this.isAvailable=true;
      this.faceSnap.snaps--;
      this.faceSnap.snaps=0;
    }
    else{
    this.faceSnap.snaps--;
    this.buttonUnSnap = 'Oops, UnSnap !';
    }
  }
}