import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PublicComponent} from "./public/public.component";
import {SecureComponent} from "./secure/secure.component";
import {HomeComponent} from "./public/home/home.component";
import {LoginComponent} from "./public/login/login.component";

const routes: Routes = [
  { path: '',
    component: PublicComponent,
    children:[
      { path: 'home', component: HomeComponent, data: { title: 'home' }  },
      { path: 'login', component: LoginComponent, data: { title: 'login' }  },
    ]
  },

  { path: 'secure', component: SecureComponent, data: { title: 'public' }  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
