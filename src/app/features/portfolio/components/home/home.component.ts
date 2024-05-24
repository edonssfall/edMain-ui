import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  text = 'Web Developer';
  textArray = ['Web Developer', 'Backend Developer', 'Student', 'Designer'];
  currentIndex = 0;

  ngOnInit() {
    setInterval(() => {
      this.currentIndex = Math.floor(Math.random() * (this.textArray.length));
      this.text = this.textArray[this.currentIndex];
    }, 3000);
  }
}
