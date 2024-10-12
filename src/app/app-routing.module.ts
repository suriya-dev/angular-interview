import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileSwipComponent } from './profile-swip/profile-swip.component';
import { ProfileViewComponent } from './profile-swip/profile-view/profile-view.component';

const routes: Routes = [
  { path: '', component: ProfileSwipComponent }, // Default to swipe page
  { path: 'view/:id', component: ProfileViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
