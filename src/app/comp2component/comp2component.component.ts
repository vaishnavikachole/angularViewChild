import { Component } from '@angular/core';

@Component({
  selector: 'app-comp2component',
  templateUrl: './comp2component.component.html',
  styleUrls: ['./comp2component.component.css']
})
export class Comp2componentComponent {
userName: string="Default Value";

clickMe(){
  alert(this.userName)
}
}



