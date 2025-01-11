import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule } from "@angular/forms";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SwiperComponent } from './swiper/swiper.component';
import { HammerModule } from '@angular/platform-browser';
import { ProfileDetailsComponent } from './swiper/profile-details/profile-details.component';
import { FileValidationComponent } from './file-validation/file-validation.component';


@NgModule({
  declarations: [
    AppComponent,
    SwiperComponent,
    ProfileDetailsComponent,
    FileValidationComponent,
    
    ],
  imports: [
    BrowserModule,
    HammerModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule, 
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
