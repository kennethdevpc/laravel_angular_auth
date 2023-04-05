import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit,OnChanges{

  public form!: FormGroup;
  constructor(private fb:FormBuilder,
              private http:HttpClient,
              private router: Router) { }

  ngOnInit(): void {
    this.form=this.fb.group({
      name:['',Validators.required],
      last_name:['',Validators.required],
      email:['', [Validators.required,Validators.email]],
      password:['',Validators.required,],
      password_confirmation:['',Validators.required],
    })
  }
  ngOnChanges(){
    console.log("changes",)

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
    this.http.post('http://127.0.0.1:8000/register',formData).subscribe(
      (result:any)=>{
       console.log(result)


      },error => {
        console.log('error')
        console.log('error: ',error);

      }
    );
  }
}
