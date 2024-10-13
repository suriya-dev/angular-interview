import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import profile from '../../../assets/json/userdetails.json'

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrl: './profile-details.component.scss'
})
export class ProfileDetailsComponent  implements OnInit{
  @Input()currentIndex = 0;
  @Output() backClickEvent = new EventEmitter();
  profiles : any = [...profile ];

  currentProfile : any = {};

  constructor(private snackBar: MatSnackBar) {}
  ngOnInit(): void {
    this.currentProfile = this.profiles.filter(el=>( el.userId == this.currentIndex ))[0]
  }

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
  backClick(){
    this.backClickEvent.emit(true)
  }
}
