import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.scss']
})
export class SecureComponent implements OnInit {
  public user: any;

  constructor(private http: HttpClient, private router:Router) {
  }

  ngOnInit(): void {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
    this.http.get('http://127.0.0.1:8000/user', {headers: headers}).subscribe(
      result => {
        console.log("result:--",result)
        this.user = result;

      },

      error => {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);

      }
    )
  }

}
