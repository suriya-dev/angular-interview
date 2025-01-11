import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bootstrap-profile',
  templateUrl: './bootstrap-profile.component.html',
  styleUrl: './bootstrap-profile.component.scss'
})
export class BootstrapProfileComponent {
  profiles: any = [];
  currentIndex: number = 0;

  constructor( public httpClint :  HttpClient) { 
  }
  ngOnInit(): void {
    this.getData().subscribe(res=>{
      this.profiles = res
      console.log(this.profiles);
      
    })
   }

  getData(){
   return this.httpClint.get('assets/json/userdetails.json')
  }

  nextProfile(): void {
    this.currentIndex = (this.currentIndex + 1) % this.profiles.length;
  }

  onSwipe(direction: string): void {
    alert(direction === 'right' ? 'Interested' : 'Not Interested');
    this.nextProfile();
  }

  onShortlist(): void {
    alert('Shortlisted');
    this.nextProfile();
  } 
}
