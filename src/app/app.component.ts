import { Component } from '@angular/core';
// import * as $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BLOG-APP';
  
  isShowDiv = true;  
     
  toggleDisplayDiv() {  
    this.isShowDiv = !this.isShowDiv;  
  }    
}




