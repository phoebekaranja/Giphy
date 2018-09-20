import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Giphy } from '../giphy-class/giphy';
@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit {

  gifs: Giphy;
  gifsArray:any; 


  constructor(private http:HttpClient) { }

  ngOnInit() {
    interface ApiResponse{
      data:string;
    }
    this.http.get<ApiResponse>("https://api.giphy.com/v1/gifs/trending?api_key=SBIMWIouMVQgNlV3MmvK45OTL4DEXuR6&limit=25&rating=G").subscribe(data=>{
      this.gifs= new Giphy(data.data)
      this.gifsArray= this.gifs.data;
      console.log(this.gifs);
      
  })

}
}
