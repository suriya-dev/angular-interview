import { Component } from '@angular/core';
 import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrl: './profile-details.component.scss'
})
export class ProfileDetailsComponent {
  currentIndex = 0;
  profiles = [
    {
      name: 'Pragati',
      details: '27 Yrs, 5 ft 5 in, MBBS, Doctor, PooSam...',
      image: 'assets/images/image2.jpg'
    },
    {
      name: 'Aiswarya',
      details: '26 Yrs, 5 ft 4 in, MBBS, Doctor, Nadar...',
      image: 'assets/images/image3.jpg'
    }
    // More profiles
  ];

  currentProfile = this.profiles[this.currentIndex];

  constructor(private snackBar: MatSnackBar) {}

  // Show toast message
  showToast(message: string) {
    this.snackBar.open(message, 'Close', { duration: 2000 });
  }

  // Navigate to the next profile
  nextProfile() {
    this.currentIndex = (this.currentIndex + 1) % this.profiles.length;
    this.currentProfile = this.profiles[this.currentIndex];
  }

  // Handle interested action
  interested() {
    this.showToast('Interested');
    this.swipeRight();
  }

  // Handle not interested action
  notInterested() {
    this.showToast('Not Interested');
    this.swipeLeft();
  }

  // Handle shortlist action
  shortlist() {
    this.showToast('Shortlisted');
    this.nextProfile();
  }

  // Swipe animations for left and right
  swipeLeft() {
    const card = document.querySelector('.profile-card');
    card.classList.add('swipe-left');
    setTimeout(() => {
      this.nextProfile();
      card.classList.remove('swipe-left');
    }, 500);  // Wait for animation to complete
  }

  swipeRight() {
    const card = document.querySelector('.profile-card');
    card.classList.add('swipe-right');
    setTimeout(() => {
      this.nextProfile();
      card.classList.remove('swipe-right');
    }, 500);
  }
}
