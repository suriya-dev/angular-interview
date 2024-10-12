import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

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
  profiles = [
    {
      name: 'Priyanka',
      age: 27,
      height: '5 ft 2 in',
      profession: 'Doctor',
      location: 'Chennai, Tamil Nadu, India',
      image: 'assets/images/image2.jpg'
    },
    {
      name: 'Aiswarya',
      age: 26,
      height: '5 ft 0 in',
      profession: 'Doctor',
      location: 'Tamil Nadu, India',
      image: 'assets/images/image3.jpg'
    },
    {
      name: 'Sneha',
      age: 28,
      height: '5 ft 3 in',
      profession: 'Engineer',
      location: 'Coimbatore, Tamil Nadu, India',
      image: 'assets/images/image4.jpg'
    }
  ];

  currentIndex : any = 0;

  next() {
    if (this.currentIndex < this.profiles.length - 1) {
      this.currentIndex++;
    }
  }

  prev() {
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
}
