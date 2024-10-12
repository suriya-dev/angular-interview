
import { HttpClient } from '@angular/common/http';
import { Component, Input, input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrl: './profile-view.component.scss'
})
export class ProfileViewComponent {
  
  @Input() profile: any;
  profiles : any = [];

  constructor(private snackBar: MatSnackBar, private httpClient :  HttpClient){
    this.getData().subscribe(res=>{
      this.profiles = res;
      console.log(this.profiles);
      
    })
  }
  getData(){
    return this.httpClient.get('assets/json/userdetails.json')
   }
  ngOnInit(): void {}

   
  swipeLeft(): void {
    this.showSnackBar('Not Interested');
    this.profiles = this.profiles[this.profile.userId -1];
  }

  swipeRight(): void {
    this.showSnackBar('Interested');
    this.profiles = this.profiles[this.profile.userId +1];

  }

  shortlist(): void {
    debugger
    this.showSnackBar('Shortlisted');
    this.profiles = this.profiles[this.profile.userId +1];

  }
  showSnackBar(message: string): void {
    this.snackBar.open(message, '', { duration: 2000 });
  }
}
