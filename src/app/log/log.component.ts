import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent {
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
