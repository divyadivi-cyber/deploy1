import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
dbList:string[];
current:boolean= false;
  constructor (private http: HttpClient) { }

  ngOnInit() {
    this.http.get('./assets/data/db.json').subscribe(
      data => {
        this.dbList = data as string [];
       
  },
  )
    }

    onClick()
    {
      this.current=true;
     
    }
   
}
