import { Component, ViewEncapsulation } from '@angular/core';
import { getAuth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None 
})
export class AppComponent {
constructor(private router:Router,private Auth : AngularFireAuth ){}
  title = 'exovite';
  getEmail!:string;
  getPassword!:string;
  invalid : string = "";
  onSubmit(form : NgForm){
    this.Auth.signInWithEmailAndPassword(this.getEmail, this.getPassword)
    .then((userCredential) => {
    
      const user = userCredential.user;
      this.invalid = "";
      this.router.navigate(["main"]);
      })
  .catch((error) => {
    this.invalid="Login incorrect";
  });
  } 
  }
