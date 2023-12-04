import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Comp2componentComponent } from './comp2component/comp2component.component';

const routes:Routes=[
  {path:'home',component:HomeComponent},
  {path:'comp2',component:Comp2componentComponent}
]

@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
