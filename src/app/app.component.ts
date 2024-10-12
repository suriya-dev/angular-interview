import { Component, OnInit } from '@angular/core';

import * as userData from '../assets/json/userdetails.json' 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  

  profiles: any = (userData as any).default;
   images: string[] = [
    'assets/images/image2.jpg',
    'assets/images/image3.jpg',
    'assets/images/image4.jpg'
  ];



  currentIndex: number = 0;

  ngOnInit(): void {
    console.log("userDataList", this.profiles);
    
  }

  nextProfile(): void {
    this.currentIndex = (this.currentIndex + 1) % this.profiles.length;
  }

  prevProfile(): void {
    this.currentIndex = (this.currentIndex - 1 + this.profiles.length) % this.profiles.length;
  }
}
