import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  persons:any;


  constructor(private http:HttpClient) {

  }

  ngOnInit() {
    //console.log("oninit");
    this.getList();
  }
  getList(){
    this.http.get('http://127.0.0.1:8000/api/person').subscribe((response) => {
      console.log(response['data']);
      this.persons=response['data'];
    },error => {
      console.log(error);
    });
  }


}
