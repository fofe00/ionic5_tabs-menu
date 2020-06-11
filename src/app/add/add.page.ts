import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  nom:any;
  prenom:any;
  phone:any;
  email:any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  save() {
    this.http.post('http://127.0.0.1/api/person/', {
      nom: this.nom,
      prenom: this.prenom,
      phone: this.phone,
      email: this.email,
    }).subscribe((response) => {
      console.log(response['data']);
    });
  }
}
