import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageURL!: string;

  ngOnInit() {
    this.title = 'Archibald';
    this.description = 'Mon meilleur ami';
    this.snaps = 6;
    this.imageURL =
      'https://pixabay.com/get/g1e713641af15abaa60dbb2a52d614eba37bc66557f1ab20088e2bbaa9288f9f1d148fb132f98493acd922950216cb0d4_640.jpg';
  }

  onAddSnap() {
    this.snaps++;
  }
}
