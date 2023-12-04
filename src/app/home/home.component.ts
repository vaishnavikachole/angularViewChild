import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Comp2componentComponent } from '../comp2component/comp2component.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
userName ="Anup";
@ViewChild('box')boxs: ElementRef; 

@ViewChild(Comp2componentComponent)child : Comp2componentComponent;

constructor(){
}
ngOnInit(){

}
ngAfterViewInit(){
  console.log(this.boxs)
  this.boxs.nativeElement.style.backgroundColor="blue";
  this.boxs.nativeElement.classList = "boxblue";
  this.boxs.nativeElement.innerHTML= "this is modified html";

}

changeChildProperty(){
this.child.userName = "UxTrendz";
}

callChildMethod(){
 this.child.clickMe();
}

}
