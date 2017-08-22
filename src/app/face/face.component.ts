import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face',
  templateUrl: './face.component.html',
  styleUrls: ['./face.component.css'],
})
export class FaceComponent implements OnInit {
  url: string;
  ngOnInit() {
    setInterval(() => { this.setUrl(); }, 1500);
  }
  setUrl() {
    this.url = "https://api.adorable.io/avatars/" + this.getRandomInt(1, 2000);
  }
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
