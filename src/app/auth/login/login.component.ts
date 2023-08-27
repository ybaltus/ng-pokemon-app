import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit{
  message: string = 'Vous êtes déconnecté. (pikachu)';
  name: string;
  password: string;
  auth: AuthService

  constructor(
      private authService: AuthService,
      private router: Router
  ) {
    this.auth = authService
  }
  ngOnInit(): void {
  }

  setMessage(){
    if(this.authService.isLoggedIn){
      this.message = 'Vous êtes connecté.';
    }else{
      this.message = 'Vous êtes déconnecté. (pikachu)';
    }
  }

  login(){
    this.message = 'Tentative de connexion en cours...';
    this.authService.login(this.name, this.password)
        .subscribe(isLoggedIn => {
        this.setMessage();
        if(isLoggedIn){
          this.router.navigate(['/pokemons'])
        }else{
          this.password = '';
          this.router.navigate(['/login'])

        }
    })
  }
  logout(){
    this.authService.logout();
    this.setMessage()
  }
}
