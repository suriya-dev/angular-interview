import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
 
@Component({
  selector: 'app-profile-swip',
  templateUrl: './profile-swip.component.html',
  styleUrl: './profile-swip.component.scss'
})
export class ProfileSwipComponent implements OnInit  {

  profiles: any = [];
  currentIndex: number = 0;

  isViewPage: boolean = false;
  



  constructor(private snackBar: MatSnackBar, public httpClint :  HttpClient) { 
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
viewData :any = {};
  yesClick(index : any){
    this.currentIndex = index;
    this.viewData = this.profiles[index]
    this.isViewPage = true;
  }
  noClick(index : any ){
    this.currentIndex = index;
  }

  swipeLeft(): void {
    this.showSnackBar('Not Interested');
    this.nextProfile();
  }

  swipeRight(): void {
    this.showSnackBar('Interested');
    this.nextProfile();
  }

  shortlist(): void {
    this.showSnackBar('Shortlisted');
    this.nextProfile();
  }

  nextProfile(): void {
    this.currentIndex = (this.currentIndex + 1) % this.profiles.length;
  }

  showSnackBar(message: string): void {
    this.snackBar.open(message, '', { duration: 2000 });
  }


  
}
