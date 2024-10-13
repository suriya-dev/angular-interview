import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import profileData from '../../assets/json/userdetails.json'


@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrl: './swiper.component.scss',
  animations: [
    trigger('swipe', [
      transition(':increment', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('300ms ease-in', style({ transform: 'translateX(0)', opacity: 1 })),
      ]),
      transition(':decrement', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('300ms ease-in', style({ transform: 'translateX(0)', opacity: 1 })),
      ]),
    ]),
  ],
})
export class SwiperComponent {


  isDetailsPage: boolean = false;
  currentIndex : any = 0;
  profiles : any = [...profileData];
  selectedUser :  any = {};


  next() {
    if (this.currentIndex < this.profiles.length - 1) {
      this.currentIndex++;
    }
  }

  prev(obj) {
    this.selectedUser =  obj;
    this.isDetailsPage = true;
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }


  // Handling swipe gestures
  swipeLeft() {
    if (this.currentIndex < this.profiles.length - 1) {
      this.currentIndex++;
    }
  }

  swipeRight() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
  childEmit(value){
    this.isDetailsPage = false
  }
}
