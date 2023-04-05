import { Component, OnInit } from '@angular/core';
import {faAdjust } from '@fortawesome/free-solid-svg-icons';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  faCoffee = faAdjust;
  public form!: FormGroup;

  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private router: Router ) { }

  ngOnInit(): void {
    this.form=this.fb.group({
      email:'',
      password:'',
    })
  }
  submit(){
    console.log(this.form.getRawValue());
    const formData= this.form.getRawValue()
    const data= {
      username: formData.email,
      password:	formData.password,
      grant_type:	"password",
      client_secret:	"HxRjM7vHFPKVIZYee9n9sZbzMDk7D2aLnTE2xwsq",
      scope:		"*",
      client_id:	2
    }
    this.http.post('http://127.0.0.1:8000/oauth/token',data).subscribe(
      (result:any)=>{
  //setiar en el locarstorage el token:
        localStorage.setItem('token', result.access_token);
        this.router.navigate(['/secure']);

      },error => {
        console.log('error')
        console.log('error: ',error);

      }
    );
  }

}
