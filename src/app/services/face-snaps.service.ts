import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      title: 'Archibald',
      description: 'Mon meilleur ami',
      imageURL:
        'https://pixabay.com/get/g407660226a85ec39410f7b156445d7a3731a05df3190b1d56d953c41f0c395b39806a2faf22f360b10284a7dcee5b9c4d95958d9d585189321b057b99d264ef7_1280.jpg',
      createdDate: new Date(),
      snaps: 0,
      location: 'Paris',
    },
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }
}