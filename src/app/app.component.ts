import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'giphy';
    performSearch(searchTerm:HTMLInputElement):void {
      console.log(`user entered:${searchTerm.value}`)
    }
  }
